const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

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

const create = async (model, data) => {
  try {
    console.log(data);
    const result = await prisma[model].create({
      data,
    });
    return result;
  } catch (error) {
    console.error(`Error in create operation: ${error.message}`);
    throw error;
  }
};

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

