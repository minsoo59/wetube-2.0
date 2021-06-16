import express from "express";
import { index, detail, gallery } from "../controllers/indexController";
import strategyRouter from "./strategyRouter";

const indexRouter = express.Router();

indexRouter.route("/").get(index);
indexRouter.route("/detail").get(detail);
indexRouter.route("/gallery").get(gallery);
indexRouter.use("/strategy", strategyRouter);

export default indexRouter;
