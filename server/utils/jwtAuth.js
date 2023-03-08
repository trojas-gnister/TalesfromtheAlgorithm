const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.JWT_SECRET || 'default_secret_key';
const generateToken = (user) => {
  const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });
  return token;
};
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded.id;
  } catch (err) {
    return null;
  }
};
d
module.exports = { generateToken, verifyToken };

