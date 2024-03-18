const User = require("../schemas/User");

//create a user
const createUser = async (req, res) => {
  try {
    const { username } = req.body;
    const user = await User.create({ username });
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

module.exports = {
  createUser,
};
