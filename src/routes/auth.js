const router = require('express').Router();
const Welcome = require('../views/reg/Welcome');
const Login = require('../views/reg/Login');
const Registration = require('../views/reg/Registration');

const bcrypt = require('bcrypt');
const isNotAuth = require('../middleware/isnotAuth');

const Error = require('../views/Error');

const { User } = require('../../db/models');

router.get('/', (req, res) => {
  res.render(Welcome, {});
});

router.get('/reg', isNotAuth, (req, res) => {
  res.render(Registration, {});
});

router.post('/reg', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hash, role: 'USER' });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.render(Error, { message: 'Что Пошло не так', error: {} });
  }
});

router.get('/login', isNotAuth, (req, res) => {
  res.render(Login, {});
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.sendStatus(401);
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.sendStatus(401);
    }
    req.session.user = user;
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).render(Error, { message: 'Что Пошло не так', error: {} });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((e) => {
    if (e) {
      console.log(e);
      return;
    }
    res.clearCookie('UserAuth');
    res.redirect('/auth');
  });
});

module.exports = router;
