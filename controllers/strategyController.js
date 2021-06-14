import Write from "../models/Write";

// Search
export const search = async (req, res) => {
  // console.log("should search for ", keyword);
};

// Write.find({}, (error, writingList) => {});

// Read
export const strategy = async (req, res) => {
  const { keyword } = req.query;
  let writingList = [];
  if (keyword) {
    writingList = await Write.find({
      title: {
        $regex: new RegExp(keyword, "i"),
      },
    }).sort({ createdAt: "desc" });
    return res.render("strategy", { pageTitle: "Strategy", writingList });
  } else {
    try {
      writingList = await Write.find({}).sort({ createdAt: "desc" });
      return res.render("strategy", { pageTitle: "Strategy", writingList });
    } catch (err) {
      return res.render("server-error", { err });
    }
  }
};

// Read_fileDetail
export const see = async (req, res) => {
  const { id } = req.params;
  const writing = await Write.findById(id);
  if (!writing) {
    return res.render("404", { pageTitle: "Writing not found" });
  }
  return res.render("see", {
    pageTitle: `Seeing`,
    writing,
  });
};

// Upload
export const getEdit = async (req, res) => {
  const { id } = req.params;
  const writing = await Write.findById(id);
  if (!writing) {
    return res.render("404", { pageTitle: "Writing not found" });
  }
  return res.render("edit", {
    pageTitle: `Editing`,
    writing,
  });
};
export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const writing = await Write.exists({ _id: id });
  if (!writing) {
    return res.render("404", { pageTitle: "Writing not found" });
  }
  await Write.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Write.handleHashtags(hashtags),
  });
  return res.redirect(`/epic7pan/strategy/${id}`);
};

// Create
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "글쓰기" });
};
export const postUpload = async (req, res) => {
  try {
    const { title, description, hashtags } = req.body;
    await Write.create({
      title,
      description,
      hashtags: Write.handleHashtags(hashtags),
    });
    return res.redirect("/epic7pan/strategy");
  } catch (err) {
    return res.render("upload", {
      pageTitle: "Upload",
      errorMessage: err._message,
    });
  }
};

// Delete
export const deleteWriting = async (req, res) => {
  const { id } = req.params;
  await Write.findByIdAndDelete(id);
  // delete Writing
  return res.redirect("/epic7pan/strategy");
};
