import express from "express";
import {
  edit,
  logout,
  see,
  startGithubLogin,
  finishGithubLogin,
  getEdit,
  postEdit,
  getChangePassword,
  postChangePassword,
} from "../controllers/userC";
import {
  avatarUpload,
  protectorMiddleware,
  publicOnlyMiddleware,
} from "../middlewares";

const userR = express.Router();

userR.get("/logout", protectorMiddleware, logout);
userR
  .route("/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(avatarUpload.single("avatar"), postEdit);
userR
  .route("/change-password")
  .all(protectorMiddleware)
  .get(getChangePassword)
  .post(postChangePassword);
userR.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userR.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);

userR.get("/:id", see);

export default userR;
