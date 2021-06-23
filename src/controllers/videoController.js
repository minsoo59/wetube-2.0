import Video from "../models/Video";

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
  const videos = await Video.find({}).sort({ createdAt: "desc" });
  return res.render("wetube", { pageTitle: "Home", videos });
}; //방법2. promise -> callback의 최신버전이라 보면 됨.
export const watch = async (req, res) => {
  const {
    params: { id },
  } = req;
  // edit 기능을 위한
  const video = await Video.findById(id);
  if (!video) {
    return res
      .status(404)
      .render("wetube404", { pageTitle: "Video not found." });
  }
  return res.render("wetubeWatch", { pageTitle: video.title, video });
};

export const getEdit = async (req, res) => {
  const {
    params: { id },
  } = req;
  const video = await Video.findById(id);
  if (!video) {
    return res
      .status(404)
      .render("wetube404", { pageTitle: "Video not found." });
  }
  return res.render("wetubeEdit", { pageTitle: `Edit:${video.title}`, video });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id });
  if (!video) {
    return res
      .status(404)
      .render("wetube404", { pageTitle: "Video not found." });
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Video.formatHashtags(hashtags),
  });
  //redirect-> 브라우저가 자동으로 이동하도록 하는 것.
  return res.redirect(`/wetube/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("wetubeUpload", { pageTitle: "Upload Video" });
};

//. 데이터 만드는 방법2 -> if you have video model, just create
export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: Video.formatHashtags(hashtags),
    });
    // await video.save();
    return res.redirect("/wetube");
  } catch (error) {
    return res.status(400).render("wetubeUpload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};

export const deleteVideo = async (req, res) => {
  const { id } = req.params;
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
    });
  }
  return res.render("wetubeSearch", { pageTitle: "Search", videos });
};
