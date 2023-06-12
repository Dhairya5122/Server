const mongoose = require("mongoose");

const { Schema } = mongoose;
const SignupSchema = new Schema({
  username: {
    type: String,
  },
  name: {
    type: String,
  },
  mobile: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("Register", SignupSchema);
