const Error = require('../views/Error.jsx');

module.exports = function isNotAuth(req, res, next) {
  const user = req.session?.user?.name;
  if (!user) {
    next();
  } else {
    res.render(Error, {
      message: 'Что-то пошло не так',
      error: {},
    });
  }
};
