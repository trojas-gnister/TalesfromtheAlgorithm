const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User } = require("../User");
const { InMemoryCache } = require('memory-cache');
const cache = new InMemoryCache();
require("dotenv").config();

const { authenticateUser, createUser, loginUser, logoutUser } = require('./controllers');

// Create user account
router.post('/signup', createUser);

// Login user
router.post('/login', loginUser);

// Logout user
router.post('/logout', authenticateUser, logoutUser);

// Protected route
router.get('/protected', authenticateUser, (req, res) => {
  res.status(200).json({ message: 'This is a protected route' });
});

module.exports = router;