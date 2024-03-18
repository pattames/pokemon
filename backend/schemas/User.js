const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLenght: 2,
    maxLength: 20,
  },
});

module.exports = mongoose.model("User", userSchema);
