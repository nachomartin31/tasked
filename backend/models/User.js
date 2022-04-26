const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  token: {
    type: String
  },
  confirmedAccount: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

userSchema.pre("save", async function hashPassword(next) {
  if (!this.isModified("password")) { next(); }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.checkPassword = async function checkPassword(password) {
  const validPassword = await bcrypt.compare(password, this.password);
  return validPassword;
};

module.exports = model("User", userSchema);
