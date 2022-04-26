const User = require("../models/User");
const { generateId } = require("../helpers/generateId");
const { generateJWT } = require("../helpers/generateJWT");

const getUser = async ({ query }, res) => {
  try {
    const user = await User.find(query);
    res.status(200).json(user);
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
    const newUser = await User.create({ ...body, token: generateId() });
    res.status(201).json(newUser);
  } catch {
    const error = new Error("Server did not respond");
    res.status(500).json({ message: error.message });
  }
};

const logIn = async ({ body: { email, password } }, res) => {
  const user = await User.findOne({ email });
  let status;
  let result;
  if (!user) {
    status = 404;
    const error = new Error("User not found");
    result = { message: error.message };
  } else if (!user.confirmedAccount) {
    status = 403;
    const error = new Error("This account has not been verified");
    result = { message: error.message };
  } else if (await user.checkPassword(password)) {
    const { _id, name, email: userEmail } = user;
    status = 200;
    result = ({
      _id,
      name,
      email: userEmail,
      token: generateJWT(_id)
    });
  } else {
    const error = new Error("Invalid password");
    result = { message: error.message };
    status = 403;
  }
  return res.status(status).json(result);
};

const confirm = async ({ params: { token } }, res) => {
  const user = await User.findOne({ token });
  if (user) {
    try {
      user.confirmedAccount = true;
      user.token = "";
      user.save();
      return res.status(200).json(user);
    } catch (error) {
      error.message = "Server did not respond";
      return res.status(500).json({ message: error.message });
    }
  }
  const error = new Error("Invalid token");
  return res.status(404).json({ message: error.message });
};

const resetPassword = async ({ body: { email } }, res) => {
  const user = await User.findOne({ email });
  if (!user) {
    const error = new Error("User not found");
    return res.status(404).json({ message: error.message });
  }
  try {
    user.token = generateId();
    await user.save();
    return res.status(200).json({ message: "Sent email to reset password" });
  } catch (error) {
    error.message = "Server did not respond";
    return res.status(500).json({ message: error.message });
  }
};

const checkToken = async ({ params: { token } }, res) => {
  const validToken = await User.findOne({ token });
  if (!validToken) {
    const error = new Error("Invalid token");
    return res.status(404).json({ message: error.message });
  }
  return res.status(200).json({ message: "Token verified" });
};
module.exports = {
  getUser,
  createUser,
  logIn,
  confirm,
  resetPassword,
  checkToken
};
