import express from "express";
import { getJoin, postJoin, getLogin, postLogin } from "../controllers/userC";
import { wetube, search } from "../controllers/videoC";
import videoR from "./videoR";
import userR from "./userR";
import apiR from "./apiR";
import { publicOnlyMiddleware } from "../middlewares";

const wetubeR = express.Router();

wetubeR.get("/", wetube);
wetubeR.route("/join").all(publicOnlyMiddleware).get(getJoin).post(postJoin);
wetubeR.route("/login").all(publicOnlyMiddleware).get(getLogin).post(postLogin);

wetubeR.get("/search", search);
wetubeR.use("/videos", videoR);
wetubeR.use("/users", userR);
wetubeR.use("/api", apiR);

export default wetubeR;
