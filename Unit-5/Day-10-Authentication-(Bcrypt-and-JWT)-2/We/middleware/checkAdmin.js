const jwt = require("jsonwebtoken");

const checkAdmin = (req, res, next) => {
  if (req.body.role === "admin") {
    next();
  } else {
    res.send("Your are not authorized to access this route");
  }
};

module.exports = checkAdmin;
