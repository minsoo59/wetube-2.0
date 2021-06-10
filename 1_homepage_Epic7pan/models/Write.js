import mongoose from "mongoose";

const writeSchma = new mongoose.Schema({
  title: String, // it's same code-> {type: String}
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

const Write = mongoose.model("Write", writeSchma);
export default Write;
