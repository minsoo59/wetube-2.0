import express from "express";
import {
  see,
  getEdit,
  postEdit,
  strategy,
  getUpload,
  postUpload,
  deleteWriting,
} from "../controllers/strategyController";
const strategyRouter = express.Router();

strategyRouter.route("/").get(strategy);
strategyRouter.route("/:id([0-9a-f]{24})").get(see);
strategyRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
strategyRouter.route("/:id([0-9a-f]{24})/delete").get(deleteWriting);
strategyRouter.route("/upload").get(getUpload).post(postUpload);

export default strategyRouter;
