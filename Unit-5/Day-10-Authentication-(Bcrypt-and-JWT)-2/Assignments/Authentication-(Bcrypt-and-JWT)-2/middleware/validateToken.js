const jwt = require("jsonwebtoken");
const tokenModel = require("../model/token.model");
const dotenv = require("dotenv").config();

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const isBlacklisted = await tokenModel.fondOne({ token });
    if (isBlacklisted) {
      return res.status(401).json({ message: "Token has been blacklisted" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "Token is not valid" });
  }
};


module.exports = validateToken