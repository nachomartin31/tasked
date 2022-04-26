const jwt = require("jsonwebtoken");

const generateJWT = (id) => jwt.sign(
  { id },
  process.env.JWT_SECRET,
  { expiresIn: "15m" }
);

module.exports = { generateJWT };
