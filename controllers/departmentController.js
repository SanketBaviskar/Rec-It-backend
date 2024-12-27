// const prisma = require('../prisma/client'); // Import the Prisma client
const {
  create,
  findMany,
  update,
  remove,
  findUnique,
} = require("../services/common");
const {
  sendSuccessResponse,
  sendErrorResponse,
} = require("../utils/responseFormatter");
const {
  HTTP_STATUS,
  SUCCESS_MESSAGES,
  ERROR_MESSAGES,
} = require("../errors/ApiError");

// Create a new department
const addDepartment = async (req, res) => {
  try {
    const department = await create("department", req.body);
    sendSuccessResponse(
      res,
      HTTP_STATUS.CREATED,
      department,
      SUCCESS_MESSAGES.DEPARTMENT_CREATED
    );
  } catch (error) {
    console.error("Error adding department:", error);
    sendErrorResponse(
      res,
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      ERROR_MESSAGES.SERVER_ERROR
    );
  }
};

// Get all departments
const getAllDepartments = async (req, res) => {
  try {
    const departments = await findMany("department", {
      id: true,
      name: true,
      departmentIcon: true,
      createdAt: true,
      updatedAt: true,
    });
    sendSuccessResponse(
      res,
      HTTP_STATUS.OK,
      departments,
      SUCCESS_MESSAGES.FETCHED_SUCCESS
    );
  } catch (error) {
    console.error("Error fetching departments:", error);
    sendErrorResponse(
      res,
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      ERROR_MESSAGES.SERVER_ERROR
    );
  }
};

// Get a single department by ID
const getDepartmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await findUnique(
      "department",
      { id: parseInt(id) },
      {
        id: true,
        name: true,
        departmentIcon: true,
        createdAt: true,
        updatedAt: true,
      }
    );
    if (!department) {
      sendErrorResponse(res, HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.NOT_FOUND);
      return;
    }
    sendSuccessResponse(
      res,
      HTTP_STATUS.OK,
      department,
      SUCCESS_MESSAGES.FETCHED_SUCCESS
    );
  } catch (error) {
    console.error("Error fetching department:", error);
    sendErrorResponse(
      res,
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      ERROR_MESSAGES.SERVER_ERROR
    );
  }
};

// Update a department
const updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDepartment = await update("department", {
      where: { id: parseInt(id) },
      data: req.body,
    });
    sendSuccessResponse(
      res,
      HTTP_STATUS.OK,
      updatedDepartment,
      SUCCESS_MESSAGES.DEPARTMENT_UPDATED
    );
  } catch (error) {
    console.error("Error updating department:", error);
    sendErrorResponse(
      res,
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      ERROR_MESSAGES.SERVER_ERROR
    );
  }
};

// Delete a department
const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    await remove("department", {
      id: parseInt(id),
    });
    sendSuccessResponse(
      res,
      HTTP_STATUS.OK,
      null,
      SUCCESS_MESSAGES.DEPARTMENT_DELETED
    );
  } catch (error) {
    console.error("Error deleting department:", error);
    sendErrorResponse(
      res,
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      ERROR_MESSAGES.SERVER_ERROR
    );
  }
};

module.exports = {
  addDepartment,
  getAllDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
};
