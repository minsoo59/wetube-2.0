import "./db";
// import "./models/Write";
import express from "express";
import path from "path";
import morgan from "morgan";

import indexRouter from "./routes/indexRouter";
import strategyRouter from "./routes/strategyRouter";

const app = express();
const logger = morgan("dev");

// view engine setup
app.set("view engine", "pug");
app.set("views", process.cwd() + "/views");

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // form의 value들을 이해할 수 있음.
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/strategy", strategyRouter);

export default app;
