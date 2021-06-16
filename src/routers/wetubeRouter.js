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

const wetubeRouter = express.Router();

wetubeRouter.get("/", wetube);
wetubeRouter.route("/join").get(getJoin).post(postJoin);
wetubeRouter.route("/login").get(getLogin).post(postLogin);

wetubeRouter.get("/search", search);
wetubeRouter.use("/videos", videoRouter);
wetubeRouter.use("/users", userRouter);

export default wetubeRouter;
