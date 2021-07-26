import express from "express";
import {
  deleteVideo,
  getEdit,
  getUpload,
  postEdit,
  postUpload,
  watch,
} from "../controllers/videoC";
import { protectorMiddleware, videoUpload } from "../middlewares";
const videoR = express.Router();

// 정규식은 좀 더 공부할것.
videoR.get("/:id([0-9a-f]{24})", watch);
videoR
  .route("/:id([0-9a-f]{24})/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(postEdit);
videoR
  .route("/:id([0-9a-f]{24})/delete")
  .all(protectorMiddleware)
  .get(deleteVideo);
videoR
  .route("/upload")
  .all(protectorMiddleware)
  .get(getUpload)
  .post(
    videoUpload.fields([
      { name: "video", maxCount: 1 },
      { name: "thumb", maxCount: 1 },
    ]),
    postUpload
  );

export default videoR;
