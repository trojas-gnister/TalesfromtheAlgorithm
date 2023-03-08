const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('.../models/User');
const { requireAuth } = require('.../middleware/requireAuth');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Validate the user's login credentials
  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid login credentials' });
  }

  // Generate a JWT token for the user
  const token = jwt.sign({ userId: user.id, email: user.email }, 'secret_key');

  // Send the token to the client
  res.cookie('token', token, { httpOnly: true }).json({ message: 'Login successful' });
});

router.get('/protected', requireAuth, (req, res) => {
    res.json({ message: 'Protected route accessed successfully' });
  });

module.exports = router;