import { Router } from "express";
import { index, detail, gallery } from "../controllers/indexController";
const indexRouter = Router();

/* GET home page. */
indexRouter.route("/").get(index);
indexRouter.route("/detail").get(detail);
indexRouter.route("/gallery").get(gallery);

export default indexRouter;
