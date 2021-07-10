import mongoose from "mongoose";

const writeSchma = new mongoose.Schema({
  title: { type: String, requied: true, trim: true, maxLength: 80 }, // it's same code-> {type: String}
  description: { type: String, requied: true, trim: true, minLength: 20 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

writeSchma.static("handleHashtags", function (hashtags) {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

const Write = mongoose.model("Write", writeSchma);
export default Write;
