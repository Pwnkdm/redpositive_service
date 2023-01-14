const mongoose = require("mongoose");

const userSchema = new Schema({
  name: String,
  email: String,
  no: String,
  hobbies: String,
});
const userModel = model("user", userSchema);

module.exports = { userModel };
