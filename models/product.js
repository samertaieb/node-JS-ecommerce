var mongoose = require("mongoose");
const Schema = mongoose.Schema;
let ProductSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  stock: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: false,
  },
  categorie: {
    type: String,
    required: false,
    // type: mongoose.Schema.Types.ObjectId,
    // ref="Category"
  },
  image: {
    type: String,
    required: false,
  },
});
module.exports = mongoose.model("product", ProductSchema);
