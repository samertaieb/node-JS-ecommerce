var mongoose = require("mongoose");
const Schema = mongoose.Schema;
let ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  stock: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    // type: mongoose.Schema.Types.ObjectId,
    // ref="Category"
  },
  description: {
    type: String,
  },
  image: {
    required: true,
    type: String,
  },
});
module.exports = mongoose.model("product", ProductSchema);
