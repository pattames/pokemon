const User = require("../schemas/User");

//create a user
const createUser = async (req, res) => {
  try {
    const { username, pokemons } = req.body;
    const user = await User.create({ username, pokemons });
    res.status(201).json({
      message: "User created successfully!",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

// get a single user
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      return res.status(200).json({ data: user });
    }
    res.status(404).json({ message: "User not found" });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

//Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (users.length) {
      return res.status(200).json({ data: users });
    }
    res.status(404).json({ message: "Users not found" });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

module.exports = {
  createUser,
  getUser,
  getAllUsers,
};
