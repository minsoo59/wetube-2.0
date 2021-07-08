import mongoose from "mongoose";
//https://mongoosejs.com/docs/guide.html
const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 80 }, // = {type: String}
  fileUrl: { type: String, required: true },
  thumbUrl: { type: String, required: true },
  description: { type: String, required: true, trim: true, minLength: 20 }, // = {type: String}
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
    // 테이터의 형태를 미리 정해뒀을때의 장점.
    //잘못된 형태의 데이터가 올 경우
    //자동으로 유효성검사를 통해 몽구스가 그 데이터의 전송을 막아줌.
    // 그러니 mongoose에게 데이터 타입을 "구체적으로" 작성할수록 더 편해짐.
  },
  comment: [
    { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Comment" },
  ],
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});

videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
