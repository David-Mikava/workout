const Error = require('../views/Error.jsx');

module.exports = function admin(req, res, next) {
  const user = req.session?.user;

  if (user && user.role === 'ADMIN') {
    next();
  } else {
    res.render(Error, {
      message: 'У вас нет доступа',
      error: {},
    });
  }
};

