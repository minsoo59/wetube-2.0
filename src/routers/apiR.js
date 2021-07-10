import express from "express";
import {
  registerView,
  createComment,
  deleteComment,
} from "../controllers/videoC";

const apiR = express.Router();

apiR.post("/videos/:id([0-9a-f]{24})/view", registerView);
apiR.post("/videos/:id([0-9a-f]{24})/comment", createComment);
apiR.delete("/comment/:id([0-9a-f]{24})", deleteComment);

export default apiR;
