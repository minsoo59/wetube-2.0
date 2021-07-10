import express from "express";
import morgan from "morgan";
import session from "express-session";
import flash from "express-flash";
import MongoStore from "connect-mongo";
import indexR from "./routers/indexR";
import wetubeR from "./routers/wetubeR";
import epic7panR from "./routers/epic7panR";
import path from "path";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true })); // form의 value들을 이해할 수 있음.
app.use(express.json());
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

app.use(flash());
app.use(localsMiddleware);
app.use("/convert", express.static("node_modules/@ffmpeg/core/dist"));
app.use("/", indexR);
app.use("/epic7pan", epic7panR);
app.use("/static", express.static("assets")); //사용자에게 보여질 화면
app.use("/uploads", express.static("uploads"));
app.use("/wetube", wetubeR);

export default app;
