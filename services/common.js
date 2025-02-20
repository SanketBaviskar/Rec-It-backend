const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

/**
 * Finds a unique record in the specified model.
 * @param {string} model - The model to search in.
 * @param {object} where - The conditions to match.
 * @param {object} select - The fields to select.
 * @returns {object} - The found record.
 */
const findUnique = async (model, where, select = {}) => {
  try {
    const result = await prisma[model].findUnique({
      where,
      select,
    });
    return result;
  } catch (error) {
    console.error(`Error in findUnique operation: ${error.message}`);
    throw error;
  }
};

/**
 * Finds the first record that matches the conditions in the specified model.
 * @param {string} model - The model to search in.
 * @param {object} where - The conditions to match.
 * @param {object} select - The fields to select.
 * @returns {object} - The found record.
 */
const findOne = async (model, where, select = {}) => {
  try {
    const result = await prisma[model].findFirst({
      where,
      select,
    });
    return result;
  } catch (error) {
    console.error(`Error in findOne operation: ${error.message}`);
    throw error;
  }
};

/**
 * Finds multiple records that match the conditions in the specified model.
 * @param {string} model - The model to search in.
 * @param {object} options - The options for filtering, selecting, etc.
 * @returns {Array} - The found records.
 */
const findMany = async (model, options = {}) => {
  try {
    const results = await prisma[model].findMany({
      select: options, // Spread options to include dynamic filtering
    });
    return results;
  } catch (error) {
    console.error(`Error in findMany operation: ${error.message}`);
    throw error;
  }
};

/**
 * Creates a new record in the specified model.
 * @param {string} model - The model to create the record in.
 * @param {object} data - The data for the new record.
 * @returns {object} - The created record.
 */
const create = async (model, data) => {
  try {
    const result = await prisma[model].create({
      data,
    });
    return result;
  } catch (error) {
    console.error(`Error in create operation: ${error.message}`);
    throw error;
  }
};

/**
 * Updates a record in the specified model.
 * @param {string} model - The model to update the record in.
 * @param {object} where - The conditions to match the record.
 * @param {object} data - The new data for the record.
 * @returns {object} - The updated record.
 */
const update = async (model, where, data) => {
  try {
    const result = await prisma[model].update(
      where,
      data,
    );
    return result;
  } catch (error) {
    console.error(`Error in update operation: ${error.message}`);
    throw error;
  }
};

/**
 * Deletes a record in the specified model.
 * @param {string} model - The model to delete the record from.
 * @param {object} where - The conditions to match the record.
 * @returns {object} - The deleted record.
 */
const remove = async (model, where) => {
  try {
    const result = await prisma[model].delete({
      where,
    });
    return result;
  } catch (error) {
    console.error(`Error in remove operation: ${error.message}`);
    throw error;
  }
};

/**
 * Deletes multiple records that match the conditions in the specified model.
 * @param {string} model - The model to delete the records from.
 * @param {object} where - The conditions to match the records.
 * @returns {object} - The result of the delete operation.
 */
const removeAll = async (model, where) => {
  try {
    const result = await prisma[model].deleteMany({
      where,
    });
    return result;
  } catch (error) {
    console.error(`Error in remove operation: ${error.message}`);
    throw error;
  }
};

/**
 * Counts the number of records that match the conditions in the specified model.
 * @param {string} model - The model to count the records in.
 * @param {object} where - The conditions to match the records.
 * @returns {number} - The count of matching records.
 */
const count = async (model, where = {}) => {
  try {
    const result = await prisma[model].count({
      where,
    });
    return result;
  } catch (error) {
    console.error(`Error in count operation: ${error.message}`);
    throw error;
  }
};

module.exports = {
  findUnique,
  findOne,
  findMany,
  create,
  update,
  remove,
  removeAll,
  count,
};

