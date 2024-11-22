const prisma = require('../config/prisma');

const createUser = async (userData) => {
  const user = await prisma.user.create({ data: userData });
  console.log('User created:', user);
  return user
};

const findUserByEmail = (email) => {
  return prisma.user.findUnique({ where: { email } });
};

const findUserById = (id) => {
  return prisma.user.findUnique({ where: { id } });
};

const updateUser = (id, userData) => {
  return prisma.user.update({ where: { id }, data: userData });
};

const deleteUserById = (id) => {
  return prisma.user.delete({ where: { id } });
};


module.exports = { createUser, findUserByEmail, findUserById, updateUser, deleteUserById };

