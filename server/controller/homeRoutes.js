const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User } = require("User");

// Home page
router.get("/", (req, res) => {
  res.render("Home");
});

// Login page
router.get("/login", (req, res) => {
  res.render("Login");
});

// SignUp page
router.get("/signup", (req, res) => {
  res.render("SignUp");
});

// openAi-API page
router.get("/story", (req, res) => {
  res.render("choices");
});

// User's page
router.get("/user", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.render("user", { username: user.username });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Authenticate JWT token
function authenticateToken(req, res, next) {d
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = router;
