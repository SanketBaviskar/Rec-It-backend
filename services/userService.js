const prisma = require('../config/prisma');

const createUser = async (userData) => {
  try {
    const user = await prisma.user.create({ data: userData });
    return user;
  } catch (error) {
    console.error('Error creating user:', error.message);
    throw error;
  }
};

const findUserByEmail = async (email) => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  } catch (error) {
    console.error('Error finding user by email:', error.message);
    throw error;
  }
};

const findUserById = async (id) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  } catch (error) {
    console.error('Error finding user by ID:', error.message);
    throw error;
  }
};

const updateUser = async (id, userData) => {
  try {
    const updatedUser = await prisma.user.update({ where: { id }, data: userData });
    return updatedUser;
  } catch (error) {
    console.error('Error updating user:', error.message);
    throw error;
  }
};

const deleteUserById = async (id) => {
  try {
    const deletedUser = await prisma.user.delete({ where: { id } });
    return deletedUser;
  } catch (error) {
    console.error('Error deleting user by ID:', error.message);
    throw error;
  }
};


module.exports = { createUser, findUserByEmail, findUserById, updateUser, deleteUserById };

