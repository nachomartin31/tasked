const User = require("../models/User");

const getUser = async ({ query }, res) => {
  try {
    const user = await User.find(query);
    res.json(user);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const createUser = async ({ body }, res) => {
  const { email } = body;
  const alreadySignedUp = await User.findOne({ email });
  if (alreadySignedUp) {
    const error = new Error("This email is already signed");
    res.status(400).json({ message: error.message });
  }
  try {
    const newUser = await User.create(body);
    res.json(newUser);
  } catch {
    const error = new Error("Server did not respond");
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUser,
  createUser
};
