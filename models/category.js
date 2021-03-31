var mongoose = require("mongoose");
const Schema = mongoose.Schema;
var Product = require("../models/product.js");

let CategorySchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Category", CategorySchema);
