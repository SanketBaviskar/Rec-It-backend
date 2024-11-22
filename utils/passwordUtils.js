const bcrypt = require('bcrypt');

 const hashPassword = (password) => {
  return bcrypt.hash(password, 10);
};

 const comparePasswords = (plainPassword, hashedPassword) => {
  return bcrypt.compare(plainPassword, hashedPassword);
};

module.exports = { hashPassword, comparePasswords };

