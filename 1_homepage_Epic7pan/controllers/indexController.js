export const index = (req, res) => {
  return res.render("index", {
    pageTitle: "Index",
  });
};
export const detail = (req, res) => {
  return res.render("detail", {
    pageTitle: "Detail",
  });
};
export const gallery = (req, res) => {
  return res.render("gallery", {
    pageTitle: "Gallery",
  });
};
