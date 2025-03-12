import { sign, verify } from 'jsonwebtoken';

 const generateToken = (userId) => {
  return sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

const verifyToken = async (token) => {
  return new Promise((resolve, reject) => {
    verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.error("JWT verification error:", err);
        return reject(err);
      }
      resolve(decoded);
    });
  });
};

export default { generateToken, verifyToken };

