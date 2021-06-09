var express = require("express");
const {
  index,
  see,
  getEdit,
  postEdit,
  detail,
  gallery,
  strategy,
} = require("../controllers/indexController");
var router = express.Router();

/* GET home page. */
router.route("/").get(index);
router.route("/detail").get(detail);
router.route("/gallery").get(gallery);
router.route("/strategy").get(strategy);

router.route("/strategy/:id(\\d+)").get(see);
router.route("/strategy/:id(\\d+)/edit").get(getEdit).post(postEdit);
// router.route("/:id(\\d+)/delete").get(edit);
// router.route("/upload").get(edit);

module.exports = router;
