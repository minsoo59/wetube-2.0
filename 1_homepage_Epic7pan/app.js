var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");

var app = express();

// view engine setup
app.set("view engine", "pug");
app.set("views", process.cwd() + "/views");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // form의 value들을 이해할 수 있음.
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

module.exports = app;
