const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");
const tokenModel = require("../model/token.model");
const dotenv = require("dotenv").config();

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password, age } = req.body;

  try {
    const user = new userModel({ name, email, password, age });
    await user.save();
    res.status(201).json({ message: "user registered successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// LOGIN

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
    const refreshToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_REFRESH_EXPIRE }
    );

    await new Token({
      token: refreshToken,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    }).save();

    res.json({ accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
});

// LOGOUT

router.post("/logout", blacklistMiddleware, async (req, res) => {
  res.json({ message: "Logged out" });
});

router.get("/protected", validateToken, (req, res) => {
  res.json({ message: "You are authenticated", user: req.user });
});

// Refresh Token
router.post("/refresh", async (req, res) => {
  const { refreshToken } = req.body;
  try {
    const token = await Token.findOne({ token: refreshToken });
    if (!token) return res.status(401).json({ error: "Invalid token" });

    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).json({ error: "Invalid token" });

      const accessToken = jwt.sign(
        { userId: decoded.userId },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE }
      );
      res.json({ accessToken });
    });
  } catch (error) {
    res.status(500).json({ error: "Error refreshing token" });
  }
});



module.exports = router;
