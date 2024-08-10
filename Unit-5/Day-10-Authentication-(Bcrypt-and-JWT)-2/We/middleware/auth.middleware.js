const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]
  console.log(token);
  
  jwt.verify(token, process.env.JWT_SECRET_KEY1, function (err, decoded) {
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
