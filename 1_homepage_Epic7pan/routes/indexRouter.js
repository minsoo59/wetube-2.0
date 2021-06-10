var express = require("express");
const { index, detail, gallery } = require("../controllers/indexController");
var router = express.Router();

/* GET home page. */
router.route("/").get(index);
router.route("/detail").get(detail);
router.route("/gallery").get(gallery);

module.exports = router;
