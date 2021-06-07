var express = require("express");
const { index } = require("../controllers/indexController");
var router = express.Router();
let path = require("path");
let fs = require("fs");
var sanitizeHtml = require("sanitize-html");

/* GET home page. */
router.route("/").get(index);
// router
//   .route("/create")
//   .get(getCreate)
//   .post(async (req, res) => {
//     return res.render("create", { title: "create" });
//   });

// router.get("/:pageId", (req, res, next) => {
//   let filteredId = path.parse(req.params.pageId).base;
//   console.log(filteredId);
//   fs.readFile(`data/${filteredId}`, "utf8", (err, description) => {
//     if (err) {
//       next(err);
//     } else {
//       let title = req.params.pageId;
//       let sanitizedTitle = sanitizeHtml(title);
//     }
//     return res.render("/index");
//   });
// });

module.exports = router;
