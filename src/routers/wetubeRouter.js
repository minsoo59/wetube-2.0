import express from "express";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
} from "../controllers/userController";
import { wetube, search } from "../controllers/videoController";
import videoRouter from "./videoRouter";
import userRouter from "./userRouter";
import apiRouter from "./apiRouter";
import { publicOnlyMiddleware } from "../middlewares";

const wetubeRouter = express.Router();

wetubeRouter.get("/", wetube);
wetubeRouter
  .route("/join")
  .all(publicOnlyMiddleware)
  .get(getJoin)
  .post(postJoin);
wetubeRouter
  .route("/login")
  .all(publicOnlyMiddleware)
  .get(getLogin)
  .post(postLogin);

wetubeRouter.get("/search", search);
wetubeRouter.use("/videos", videoRouter);
wetubeRouter.use("/users", userRouter);
wetubeRouter.use("/api", apiRouter);

export default wetubeRouter;
