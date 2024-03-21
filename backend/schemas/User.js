const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 20,
  },
  pokemons: [{
    type: Number,
  }
  ]
});

module.exports = mongoose.model("User", userSchema);
