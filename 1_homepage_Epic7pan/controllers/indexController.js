export const index = async (req, res) => {
  return res.render("index", { title: "index" });
};
export const detail = async (req, res) => {
  return res.render("detail", { title: "detail" });
};
export const gallery = async (req, res) => {
  return res.render("gallery", { title: "gallery" });
};
export const strategy = async (req, res) => {
  return res.render("strategy", { title: "strategy" });
};
