//writingList
let writingList = [
  {
    title: "First",
    user: "min1",
    createdAt: "2 mintues ago",
    id: 1,
    views: 1,
    rating: 2,
  },
  {
    title: "Second",
    user: "min2",
    createdAt: "25 mintues ago",
    id: 2,
    views: 43,
    rating: 2,
  },
  {
    title: "thrid",
    user: "min3",
    createdAt: "21 mintues ago",
    id: 3,
    views: 5,
    rating: 2,
  },
];
const strategy = (req, res) => {
  return res.render("strategy", {
    pageTitle: "Strategy",
    writingList,
  });
};
const see = (req, res) => {
  const { id } = req.params;
  const writing = writingList[id - 1];
  return res.render("see", {
    pageTitle: `Seeing: ${writing.title}`,
    writing,
  }); // writing:writing
};
const getEdit = (req, res) => {
  const { id } = req.params;
  const writing = writingList[id - 1];
  return res.render("edit", {
    pageTitle: `Editing: ${writing.title}`,
    writing,
  });
};
const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  writingList[id - 1].title = title;
  return res.redirect(`/strategy/${id}`);
};

const getUpload = (req, res) => {
  return res.render("upload");
};
const postUpload = (req, res) => {
  const { title } = req.body;
  const newWrite = {
    title,
    user: "min3",
    createdAt: "just now",
    id: writingList.length + 1,
    views: 0,
  };
  writingList.push(newWrite);
  return res.redirect("/strategy");
};
const deleteWriting = (req, res) => {
  res.send("Delete Writing");
};

module.exports = {
  see,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  deleteWriting,
  strategy,
};
