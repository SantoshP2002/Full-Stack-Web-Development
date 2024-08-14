const token = require("../model/token.model");
const dotenv = require("dotenv").config();

const blacklistMiddleware = async (req, res, next) => {
  const token =
    req.body.refreshToken || req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    await new Token({ token, expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) }).save();
    next();
  } catch (error) {
    res.status(400).json({ message: "Error blacklisting token" });
  }
};


module.exports = blacklistMiddleware