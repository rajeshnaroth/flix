const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");

const { initApp } = require("./app/init");

const api = express(); // Do not edit/remove this line

// view engine setup
api.set("views", path.join(__dirname, "views"));
api.set("view engine", "pug");
api.set("etag", false);

api.use(logger("dev"));
api.use(express.json());
api.use(
  express.urlencoded({
    extended: false
  })
);
api.use(cookieParser());
api.use(bodyParser.json()); // support json encoded bodies
api.use(
  bodyParser.urlencoded({
    extended: true
  })
); // support encoded bodies
api.use(express.static(path.join(__dirname, "public")));

initApp(api);

// catch 404 and forward to error handler
api.use((_req, _res, next) => {
  next(createError(404));
});

// error handler
api.use((err, _req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = err;
  // eslint-disable-next-line no-console
  console.log(err);
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = api;
