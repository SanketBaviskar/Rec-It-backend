import { verify, JsonWebTokenError } from 'jsonwebtoken';
import { findUnique } from '../services/common';

const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = verify(token, process.env.JWT_SECRET);

    const user = await findUnique('user', { id: decoded.userId }, { id: true, email: true });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    next(error);
  }
};

export default authenticate;

