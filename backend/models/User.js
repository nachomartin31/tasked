const { model, Schema } = require("mongoose");

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

module.exports = model("User", userSchema);
