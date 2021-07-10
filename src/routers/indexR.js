import express from "express";

import {
  index,
  introduce,
  skillsCoding,
  skillsProjects,
} from "../controllers/indexC";

const indexR = express.Router();

indexR.route("/").get(index);
indexR.route("/introduce").get(introduce);
indexR.route("/skillsCoding").get(skillsCoding);
indexR.route("/skillsProjects").get(skillsProjects);

export default indexR;
