const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.query.token;
  jwt.verify(token, "masai", function (err, decoded) {
    if (err) {
      res.send("unauthorized or login first");
    }

    if (decoded) {
     
      req.body.username = decoded.name;
      req.body.role = decoded.role;
      next();
    }
  });
};

module.exports = auth;
