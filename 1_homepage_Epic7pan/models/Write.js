import mongoose from "mongoose";

const writeSchma = new mongoose.Schema({
  title: { type: String, requied: true }, // it's same code-> {type: String}
  description: { type: String, requied: true },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

const Write = mongoose.model("Write", writeSchma);
export default Write;
