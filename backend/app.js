var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
let { USERNAME, PASSWORD, NODE_ENV } = process.env;

const axios = require("axios");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("/:userName/:userRepo", (req, res, next) => {
  let url = "https://api.github.com/repos/" + req.params.userName + "/" + req.params.userRepo + "/commits"
  console.log("request: ", url  );
  axios({
    method: "get",
    url: url,
    // withCredentials: true,
  // headers: {
  //   'Content-Type': 'application/json',
  //   'x-access-token': state.tokenid
  // }
    auth: {
      username: USERNAME,
      password: PASSWORD
    }
  }).then(response => {
    res.status(200).json(response.data);
  })
  .catch(err => {
    next(err)
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../frontend/build/index.html"));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
