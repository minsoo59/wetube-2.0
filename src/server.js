import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import wetubeRouter from "./routers/wetubeRouter";
import indexRouter from "./routers/indexRouter";
import path from "path";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true })); // form의 value들을 이해할 수 있음.
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DB_URL,
    }),
  })
);

app.use(localsMiddleware);
app.use("/epic7pan", indexRouter);
app.use("/uploads", express.static("uploads"));
app.use("/wetube", wetubeRouter);

export default app;
