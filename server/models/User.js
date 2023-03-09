const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, default: null },
  password: { type: String },
  token: { type: String }
});

module.exports = model("user", userSchema);
