import { user as _user } from "../config/prisma";

/**
 * Creates a new user in the database.
 * @param {object} userData - The data for the new user.
 * @returns {object} - The created user.
 */
const createUser = async (userData) => {
  try {
    const user = await _user.create({ data: userData });
    return user;
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error;
  }
};

/**
 * Finds a user by their email address.
 * @param {string} email - The email address to search for.
 * @returns {object} - The found user.
 */
const findUserByEmail = async (email) => {
  try {
    const user = await _user.findUnique({ where: { email } });
    return user;
  } catch (error) {
    console.error("Error finding user by email:", error.message);
    throw error;
  }
};

/**
 * Finds a user by their ID.
 * @param {number} id - The ID of the user to search for.
 * @returns {object} - The found user.
 */
const findUserById = async (id) => {
  try {
    const user = await _user.findUnique({ where: { id } });
    return user;
  } catch (error) {
    console.error("Error finding user by ID:", error.message);
    throw error;
  }
};

/**
 * Updates a user's information in the database.
 * @param {number} id - The ID of the user to update.
 * @param {object} userData - The new data for the user.
 * @returns {object} - The updated user.
 */
const updateUser = async (id, userData) => {
  try {
    const updatedUser = await _user.update({
      where: { id },
      data: userData,
    });
    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error.message);
    throw error;
  }
};

/**
 * Deletes a user from the database by their ID.
 * @param {number} id - The ID of the user to delete.
 * @returns {object} - The deleted user.
 */
const deleteUserById = async (id) => {
  try {
    const deletedUser = await _user.delete({ where: { id } });
    return deletedUser;
  } catch (error) {
    console.error("Error deleting user by ID:", error.message);
    throw error;
  }
};

/**
 * Retrieves a list of users, optionally filtered by a search term.
 * @param {string} search - The search term to filter users by.
 * @returns {Array} - The list of found users.
 */
const userList = async (search) => {
  try {
    console.log(search);
    const filters = [];
    if (search) {
      filters.push(
        { firstName: { contains: search, mode: "insensitive" } },
        { lastName: { contains: search, mode: "insensitive" } }
      );
      if (!isNaN(search)) {
        filters.push({ studentId: parseInt(search, 10) });
      }
    }
    const options = filters.length > 0 ? { where: { OR: filters } } : {};
    return await _user.findMany(options);
  } catch (error) {
    console.error(`Error in userList: ${error.message}`);
    throw new Error(ERROR_MESSAGES.LIST_NOT_FOUND);
  }
};

export default {
  createUser,
  findUserByEmail,
  findUserById,
  updateUser,
  deleteUserById,
  userList,
};
