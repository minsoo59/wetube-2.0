var express = require("express");
const { index, postCreate } = require("../controllers/indexController");
var router = express.Router();

/* GET home page. */
router.route("/").get(index).post(postCreate);

module.exports = router;
