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
  try {
    const newUser = await User.create(body);
    res.json(newUser);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
};

module.exports = {
  getUser,
  createUser
};
