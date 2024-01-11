require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var hbs = require("express-handlebars");
var fileUpload = require("express-fileupload");
var session = require("express-session");
var dateTime = require("node-datetime");
var http = require('http');

var db = require("./config/connection");

var userRouter = require("./routes/user");
var adminRouter = require("./routes/admin");

var app = express();
const server = http.createServer(app);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
   "hbs",
   hbs.engine({
      extname: "hbs",
      defaultLayout: "layout",
      layoutsDir: __dirname + "/views/layout/",
      partialsDir: __dirname + "/views/partials/",
   })
);

app.use(logger("common"));
// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(fileUpload());
app.use(
   session({
      secret: "key",
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 600000 },
   })
);

db.connect((err) => {
   if (err) {
      console.log("Connection error " + err);
   } else {
      console.log("Database connected");
   }
});

app.use("/", userRouter);
app.use("/admin", adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
   next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
   // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get("env") === "development" ? err : {};

   // render the error page
   res.status(err.status || 500);
   res.render("error");
});
app.set("port", normalizePort(process.env.PORT || "3000"));



server.listen(app.get("port"));
server.on("error", onError);
server.on("listening", onListening);

function normalizePort(val) {
   const port = parseInt(val, 10);

   if (isNaN(port)) {
      return val; // named pipe
   }

   if (port >= 0) {
      return port; // port number
   }

   return false;
}

function onError(error) {
   if (error.syscall !== "listen") {
      throw error;
   }

   const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

   switch (error.code) {
      case "EACCES":
         console.error(bind + " requires elevated privileges");
         process.exit(1);
         break;
      case "EADDRINUSE":
         console.error(bind + " is already in use");
         process.exit(1);
         break;
      default:
         throw error;
   }
}

function onListening() {
   const addr = server.address();
   const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
   console.log("Listening on " + bind);
}

module.exports = app;
