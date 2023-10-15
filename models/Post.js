const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  negativeThought: {
    type: String,
    required: true,
  },
  distortion: {
    type: [String],
    required: true,
  },
  challenge: {
    type: String,
    required: true,
  },
  rationalThought: {
    type: String,
    required: true,
  },
  bookmark: {
    type: Boolean,
    required: true,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
