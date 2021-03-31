var mongoose = require("mongoose");
const Schema = mongoose.Schema;
let UserSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  username: {
    type: String,
  },
  age: {
    type: Number,
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});
module.exports = mongoose.model("user", UserSchema);
