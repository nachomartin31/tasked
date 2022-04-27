const jwt = require("jsonwebtoken");
const User = require("../models/User");

const checkAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  let token;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      [, token] = authorization.split(" ");
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const { id } = decoded;
      req.user = await User.findById(id).select("_id name email");
      return next();
    } catch (error) {
      error.message = "Something went wrong";
      return res.status(404).json({ message: error.message });
    }
  }
  if (!token) {
    const error = new Error("Invalid token");
    return res.status(401).json({ message: error.message });
  }
  return next();
};

module.exports = {
  checkAuth
};
