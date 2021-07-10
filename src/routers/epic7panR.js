import express from "express";
import { index, detail, gallery } from "../controllers/epic7panC";
import strategyR from "./strategyR";

const epic7panR = express.Router();

epic7panR.route("/").get(index);
epic7panR.route("/detail").get(detail);
epic7panR.route("/gallery").get(gallery);
epic7panR.use("/strategy", strategyR);

export default epic7panR;
