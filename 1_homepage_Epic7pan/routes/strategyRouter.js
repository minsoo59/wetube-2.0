const express = require("express");
import {
  see,
  getEdit,
  postEdit,
  strategy,
  getUpload,
  postUpload,
  deleteWriting,
} from "../controllers/strategyController";
const router = express.Router();

/* GET home page. */
router.route("/").get(strategy);
router.route("/:id([0-9a-f]{24})").get(see);
router.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
router.route("/:id([0-9a-f]{24})/delete").get(deleteWriting);
router.route("/upload").get(getUpload).post(postUpload);
// router.route("/upload").get(edit);

export default router;
