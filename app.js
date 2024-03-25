require('dotenv').config();
require('@babel/register');

const ReactDOMServer = require('react-dom/server');
const React = require('react');

const express = require('express');
// const cors = require('cors');
const logger = require('morgan');
const path = require('path');

const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);

const authRouter = require('./src/routes/auth');
const indexRouter = require('./src/routes/index');
const infoAdd = require('./src/routes/infoAdd');

const addRender = require('./src/middleware/addRender');

const app = express();
const PORT = 8000;

// const corsOption = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200,
//   credentials: true,
// };

const sessionConfig = {
  name: 'UserAuth',
  store: new FileStore(), // добавить после установки session-file-store
  secret: process.env.COOKIE_SEKRET, // вместо 'keyboard cat' пишем COOKIE_SEKRET если настроен файл .env
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 10 * 60 * 60 * 24 * 1000, // устанавливаем сколько живет кука
    httpOnly: false,
  },
};

app.use(expressSession(sessionConfig));
app.use(addRender);
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));
// app.use(cors(corsOption));
app.use(express.json());

app.use('/', indexRouter);
app.use('/skills', infoAdd);
app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
