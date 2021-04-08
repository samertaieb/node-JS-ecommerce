const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = async (req, res, next) => {
  const fetchUser = await User.findOne({ email: req.body.email });
  if (fetchUser) {
    res.json("compte existe");
  } else {
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
      if (err) {
        res.json({ error: err });
      }

      let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        age: req.body.age,
        phone: req.body.phone,
        email: req.body.email,
        password: hashedPass,
      });
      user.save().then(user => {
        res
          .json({
            message: "user added succ",
          })
          .catch(error => {
            res.json({
              message: "an error occured !",
            });
          });
      });
    });
  }
};
const login = (req, res, next) => {
  var email = req.body.email;
  var password = req.body.password;
  console.log(req.body);
  User.findOne({ email: email }).then(user => {
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          res.json({
            error: err,
          });
        }
        if (result) {
          let token = jwt.sign({ name: user.name }, "verySecretValue", {
            expiresIn: "1h",
          });
          res.json({
            message: "login sucessful",
            token,
            user,
          });
        } else {
          res.json({
            message: "password does not matched ",
          });
        }
      });
    } else {
      res.json({
        message: "no user found",
      });
    }
  });
};
module.exports = {
  register,
  login,
};
