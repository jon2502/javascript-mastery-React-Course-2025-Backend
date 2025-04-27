var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
require('dotenv').config()

var indexRouter = require('./routes/index');
var app = express();

const allowedOrigin = 'https://jon2502.github.io/javascript-mastery-React-Course-2025/';

app.use((req, res, next) => {
    const origin = req.get('Origin') || req.get('Referer');
    console.log(origin)
    if (origin && origin.startsWith(allowedOrigin)) {
      next();
    } else {
      res.status(403).send('Forbidden');
    }
});

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
