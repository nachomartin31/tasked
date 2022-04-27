const jwt = require("jsonwebtoken");

const generateJWT = (id) => jwt.sign(
  { id },
  process.env.JWT_SECRET,
  { expiresIn: "15d" }
);

generateJWT.refresh = (token) => {
  const payload = jwt.verify(token, process.env.JWT_SECRET);
  delete payload.iat;
  delete payload.exp;
  return jwt.sign(
    { payload },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );
};
module.exports = { generateJWT };
