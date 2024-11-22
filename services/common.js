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
  const { where = {}, select = {}, orderBy = {}, skip, take } = options;
  try {
    const results = await prisma[model].findMany({
        where,
        select: Object.keys(select).length === 0 ? { id: true, email: true, password: true, name: true, createdAt: true, updatedAt: true } : select,
        orderBy,
        skip,
        take,
      });
    return results;
  } catch (error) {
    console.error(`Error in findMany operation: ${error.message}`);
    throw error;
  }
};

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

 const update = async (model, where, data) => {
  try {
    const result = await prisma[model].update({
      where,
      data,
    });
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
  count,
};

