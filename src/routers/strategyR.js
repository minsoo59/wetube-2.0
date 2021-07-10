import express from "express";
import {
  see,
  getEdit,
  postEdit,
  strategy,
  deleteWriting,
  getUpdate,
  postUpdate,
} from "../controllers/strategyC";
const strategyR = express.Router();

strategyR.route("/").get(strategy);
strategyR.route("/:id([0-9a-f]{24})").get(see);
strategyR.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
strategyR.route("/:id([0-9a-f]{24})/delete").get(deleteWriting);
strategyR.route("/update").get(getUpdate).post(postUpdate);

export default strategyR;
