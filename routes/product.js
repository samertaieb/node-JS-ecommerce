var express = require("express");
const multer = require("multer");
const router = express.Router();
var productController = require("../controller/productController");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});
router.post(
  "/addProduct",
  upload.single("image"),
  productController.addProduct
);
router.get("/products", productController.getAllProduct);
router.get("/Product/:id", productController.getProductById);
//router.get("/Product/:category", productController.getProductByCategory); //mazelt

module.exports = router;
