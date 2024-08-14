const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const auth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ Message: "Token not found" });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
      if (err) {
        res.send("unauthorized or login first");
      }
      req.user = decoded;
      next();
    });
  } catch (error) {

    res.status(401).json({ error: 'Token is not valid' });
  }
};

module.exports = auth