const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ["Student", "Teacher", "Admin"], default: "Student" },
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model("User", UserSchema);

