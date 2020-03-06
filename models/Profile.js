const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  company: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
