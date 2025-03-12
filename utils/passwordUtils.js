import { hash, compare } from 'bcrypt';

 const hashPassword = (password) => {
  return hash(password, 10);
};

 const comparePasswords = (plainPassword, hashedPassword) => {
  return compare(plainPassword, hashedPassword);
};

export default { hashPassword, comparePasswords };

