const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
  title: String,
  body: String,
  imgurl: String,
});

module.exports = mongoose.model("App", AppSchema);