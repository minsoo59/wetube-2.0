const index = async (req, res) => {
  return res.render("index", { title: "index" });
};
// const getCreate = async (req, res) => {
//   return res.render("create", { title: "create" });
// };

// const postCreate = async (req, res) => {
//   return res.render("create", { title: "create" });
// };

// module.exports = { getCreate };

module.exports = { index };
