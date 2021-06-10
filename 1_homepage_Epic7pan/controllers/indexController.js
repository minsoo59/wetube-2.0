const index = (req, res) => {
  return res.render("index", {
    pageTitle: "Index",
  });
};
const detail = (req, res) => {
  return res.render("detail", {
    pageTitle: "Detail",
  });
};
const gallery = (req, res) => {
  return res.render("gallery", {
    pageTitle: "Gallery",
  });
};

module.exports = {
  index,
  detail,
  gallery,
};
