const http = require('http');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');

const app = express();
const httpServer = http.createServer(app);
const config = require('./config.json');

const PORT = process.env.PORT || 3000;

httpServer.listen(3000, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(session({ secret: config.sessionSecret, saveUninitialized: true, resave: true }));
app.use(cookieParser());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const indexRouter = require('./routes/index');
const apiRoute = require('./routes/api');
// const usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/api', apiRoute);
// app.use('/users', usersRouter);
