const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User } = require("../User");

router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    const token = jwt.sign({ id: userData.id }, 'JWT_SECRET');
    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json(err);
  }
});
router.post('/logout', (req, res) =>
{
 const authHeader = req.headers.authorization; // checks header if token present
});

// middleware auth
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  jwt.verify(token, 'JWT_SECRET', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    req.user = decoded;
    next();
  });
}

module.exports = router;