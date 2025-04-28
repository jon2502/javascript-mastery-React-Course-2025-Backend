var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet')
const cors = require('cors');
require('dotenv').config()

var indexRouter = require('./routes/index');

var app = express();

app.use((req, res, next) => {
    console.log(req)
    next();
})

app.use(helmet());
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
