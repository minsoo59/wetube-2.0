//writingList
let writingList = [
  {
    title: "First",
    user: "min1",
    createdAt: "2 mintues ago",
    id: 1,
    views: 1,
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
const index = (req, res) => {
  return res.render("index", {
    pageTitle: "Index",
    writingList,
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

const upload = (req, res) => {
  res.send("Upload Writing");
};
const deleteWriting = (req, res) => {
  res.send("Delete Writing");
};

module.exports = {
  index,
  see,
  getEdit,
  postEdit,
  upload,
  deleteWriting,
  detail,
  gallery,
  strategy,
};
