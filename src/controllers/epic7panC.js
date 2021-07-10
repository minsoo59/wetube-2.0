export const index = (req, res) => {
  return res.render("epic7pan/epicIndex", {
    pageTitle: "Index",
  });
};
export const detail = (req, res) => {
  return res.render("epic7pan/detail", {
    pageTitle: "Detail",
  });
};
export const gallery = (req, res) => {
  return res.render("epic7pan/gallery", {
    pageTitle: "Gallery",
  });
};
