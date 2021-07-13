import express from "express";

import { index, skillsProjects } from "../controllers/indexC";

const indexR = express.Router();

indexR.route("/").get(index);
indexR.route("/skillsProjects").get(skillsProjects);

export default indexR;
