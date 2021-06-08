const index = (req, res) => {
  const date = new Date();
  //writingList
  const writingList = [
    {
      title: "First",
      user: "min1",
      createdAt: "2 mintues ago",
      id: 1,
      views: 3,
    },
    {
      title: "Second",
      user: "min2",
      createdAt: "25 mintues ago",
      id: 2,
      views: 43,
    },
    {
      title: "thrid",
      user: "min3",
      createdAt: "21 mintues ago",
      id: 3,
      views: 5,
    },
  ];
  return res.render("index", { pageTitle: "Create", writingList });
};
// const getCreate = async (req, res) =>
//   res.render("create", { pageTitle: "Create" });
const postCreate = (req, res) => {
  const form = req.body;
  console.log(form);
  return res.render("/");
};

module.exports = { index, postCreate };
