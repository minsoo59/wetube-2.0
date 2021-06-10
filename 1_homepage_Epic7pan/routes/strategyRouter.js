var express = require("express");
const {
  see,
  getEdit,
  postEdit,
  strategy,
  getUpload,
  postUpload,
} = require("../controllers/strategyController");
var router = express.Router();

/* GET home page. */
router.route("/").get(strategy);
router.route("/:id(\\d+)").get(see);
router.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
router.route("/upload").get(getUpload).post(postUpload);
// router.route("/:id(\\d+)/delete").get(edit);
// router.route("/upload").get(edit);

module.exports = router;
