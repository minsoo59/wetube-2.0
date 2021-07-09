import Video from "../models/Video";
import User from "../models/User";
import Comment from "../models/Comment";

// CRUD operations
// Video.find({}, (error, videos) => {
//   if (error) {
//     return res.render("server-error : ");
//   }
//   // -> function 안에 function이라 세련된 코드라고 안 느껴짐.
// }); // 방법1. callback -> 이러면 안에가 마지막에 출력됨. 콜백이니까.

// Read!!
export const wetube = async (req, res) => {
  //asynchronous 동시에 존재[발생]하지 않는
  // asc(ascend)-> 올라가다 desc(descend)-> 내려가다
  const videos = await Video.find({})
    .sort({ createdAt: "desc" })
    .populate("owner");
  return res.render("wetube/video/index", { pageTitle: "Home", videos });
}; //방법2. promise -> callback의 최신버전이라 보면 됨.
export const watch = async (req, res) => {
  const {
    params: { id },
  } = req;
  // edit 기능을 위한
  const video = await Video.findById(id).populate("owner").populate("comments");
  if (!video) {
    return res
      .status(404)
      .render("wetube/404", { pageTitle: "Video not found." });
  }
  return res.render("wetube/video/watch", {
    pageTitle: video.title,
    video,
  });
};

export const getEdit = async (req, res) => {
  const {
    params: { id },
    session: {
      user: { _id },
    },
  } = req;

  const video = await Video.findById(id);
  if (!video) {
    return res
      .status(404)
      .render("wetube/404", { pageTitle: "Video not found." });
  }
  if (String(video.owner) !== String(_id)) {
    req.flash("error", "You are not the owner of the video.");
    return res.status(403).redirect("/wetube");
  }
  return res.render("wetube/video/edit", {
    pageTitle: `Edit:${video.title}`,
    video,
  });
};

export const postEdit = async (req, res) => {
  const {
    params: { id },
    body: { title, description, hashtags },
    session: {
      user: { _id },
    },
  } = req;

  const video = await Video.exists({ _id: id });
  if (!video) {
    return res
      .status(404)
      .render("wetube/404", { pageTitle: "Video not found." });
  }
  const videoModified = await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Video.formatHashtags(hashtags),
  });
  if (String(videoModified.owner) !== String(_id)) {
    return res.status(403).redirect("/wetube");
  }
  //redirect-> 브라우저가 자동으로 이동하도록 하는 것.
  return res.redirect(`/wetube/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("wetube/video/upload", { pageTitle: "Upload Video" });
};

//. 데이터 만드는 방법2 -> if you have video model, just create
export const postUpload = async (req, res) => {
  const {
    session: {
      user: { _id },
    },
    files: { video, thumb }, //es6
    body: { title, description, hashtags },
  } = req;
  try {
    const newVideo = await Video.create({
      title,
      description,
      fileUrl: video[0].path,
      thumbUrl: thumb[0].path,
      owner: _id,
      hashtags: Video.formatHashtags(hashtags),
    });
    const user = await User.findById(_id);
    user.videos.push(newVideo._id);
    user.save();
    // await video.save();
    return res.redirect("/wetube");
  } catch (error) {
    return res.status(400).render("wetube/video/upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id },
    session: {
      user: { _id },
    },
  } = req;
  const video = await Video.findById(id);
  if (!video) {
    return res
      .status(404)
      .render("wetube/404", { pageTitle: "Video not found." });
  }
  if (String(video.owner) !== String(_id)) {
    return res.status(403).redirect("/wetube");
  }
  await Video.findByIdAndDelete(id);
  // delete video
  return res.redirect("/wetube");
};

export const search = async (req, res) => {
  // console.log(req.query);
  const { keyword } = req.query;
  let videos = [];
  if (keyword) {
    //search
    videos = await Video.find({
      title: {
        $regex: new RegExp(`${keyword}`, "i"),
        // i(ignore)는 대소문자 구분 x하는 역할
        // ^asd -> asd로 시작하는 단어만 asd$ -> asd로 끝나는 단어만
      },
    }).populate("owner");
  }
  return res.render("wetube/video/search", { pageTitle: "Search", videos });
};

export const registerView = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);

  if (!video) {
    return res.sendStatus(404);
  }
  video.meta.views = video.meta.views + 1;
  await video.save();
  return res.sendStatus(200);
};

export const createComment = async (req, res) => {
  const {
    params: { id },
    body: { text },
    session: { user },
  } = req;

  const video = await Video.findById(id);
  if (!video) return res.sendStatus(404);

  const comment = await Comment.create({
    text,
    owner: user._id,
    video: id,
  });
  video.comments.push(comment._id);
  video.save();
  return res.status(201).json({ newCommentId: comment._id }); // 201 is created
};
export const deleteComment = async (req, res) => {
  const {
    params: { id: commentId }, //
    session: {
      user: { _id },
    },
  } = req;

  const comment = await Comment.findById(commentId).populate("owner");
  if (String(comment.owner._id) !== _id) return res.sendStatus(404);

  await Comment.findByIdAndDelete(comment.owner._id);
  await Comment.findByIdAndDelete(commentId);

  return res.sendStatus(200);
};
