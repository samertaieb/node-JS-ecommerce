var express = require("express");
var router = express.Router();
const authController = require("../controller/authController");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.post("/register", authController.register);

module.exports = router;
