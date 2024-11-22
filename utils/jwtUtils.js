const jwt = require('jsonwebtoken');

 const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

const verifyToken = async (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.error("JWT verification error:", err);
        return reject(err);
      }
      resolve(decoded);
    });
  });
};

module.exports = { generateToken, verifyToken };

