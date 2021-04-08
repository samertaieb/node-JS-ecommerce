var express = require("express");
const router = require("../routes");
var mongoose = require("mongoose");
var Product = require("../models/product");
var Category = require("../models/category.js");
var multer = require("multer");

//var ProductCatalog = mongoose.model("Category", Category);
const addProduct = async (req, res, next) => {
  console.log(req.body);
  const product = await new Product({
    name: req.body.name,
    stock: req.body.stock,
    price: req.body.price,
    Category: req.body.category,
    description: req.body.description,
    image: req.file.path,
  });
  product.save().then(product => {
    res.json(product);
  });

  // Product.findOne({ _id: req.body.id }, function (err, category) {
  //   if (err) {
  //     res.json(err);
  //   } else if (category == null) {
  //     res.json("category not found ");
  //   } else {
  //     category.Product.push({
  //       name: name.req.body,
  //       stock: stock.req.body,
  //       price: price.req.body,
  //       image: image.req.body, // mazelt
  //     });
  //   }
  // });
};
const getProductById = (req, res, next) => {
  Product.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
};
const updateProduct = (req, res, next) => {
  console.log(req.body);
  Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(Product => {
      res.json(Product);
    })
    .catch(error => res.json(error));
};

const getAllProduct = (req, res, next) => {
  Product.find()
    .then(products => {
      res.json(products);
    })
    .catch(err => {
      res.json(err);
    });
};
var deleteProduct = (req, res, next) => {
  Product.findByIdAndRemove(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
};

// const getProductByCategory = (req, res, next) => {
//   //mazelt
// };
module.exports = {
  addProduct,
  getProductById,
  updateProduct,
  getAllProduct,
  deleteProduct,
};
