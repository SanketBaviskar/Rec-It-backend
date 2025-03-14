// const prisma = require('../prisma/client'); // Import the Prisma client
import { create, findMany, update, remove, removeAll, findUnique } from "../services/common";
import { sendSuccessResponse, sendErrorResponse } from "../utils/responseFormatter";
import {HTTP_STATUS, SUCCESS_MESSAGES, ERROR_MESSAGES,} from "../errors/ApiError";


// Create a new inventory
const addInventory = async (req, res) => {
  try {
    const inventory = await create("inventory", req.body);
    sendSuccessResponse(
      res,
      HTTP_STATUS.CREATED,
      inventory,
      SUCCESS_MESSAGES.INVENTORY_CREATED
    );
  } catch (error) {
    console.error("Error adding inventory:", error);
    sendErrorResponse(
      res,
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      ERROR_MESSAGES.SERVER_ERROR
    );
  }
};

// Get all inventories
const getAllInventories = async (req, res) => {
  try {
    const inventorys = await findMany("inventory", {
      id: true,
      name: true,
      description: true,
      location: true,
      manager: true,
      equipments: {
        select: {
          id: true,
          name: true,
          createdAt: true,
          updatedAt: true,
        },
      },
      createdAt: true,
      updatedAt: true,
      isInventory: true,
    });
    sendSuccessResponse(
      res,
      HTTP_STATUS.OK,
      inventorys,
      SUCCESS_MESSAGES.FETCHED_SUCCESS
    );
  } catch (error) {
    console.error("Error fetching inventorys:", error);
    sendErrorResponse(
      res,
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      ERROR_MESSAGES.SERVER_ERROR
    );
  }
};

// Get a single inventory by ID
const getInventoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const inventory = await findUnique(
      "inventory",
      { id: parseInt(id) },
      {
        id: true,
        name: true,
        description: true,
        location: true,
        manager: true,
        createdAt: true,
        updatedAt: true,
        isInventory: true,
      }
    );
    if (!inventory) {
      sendErrorResponse(res, HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.NOT_FOUND);
      return;
    }
    sendSuccessResponse(
      res,
      HTTP_STATUS.OK,
      inventory,
      SUCCESS_MESSAGES.FETCHED_SUCCESS
    );
  } catch (error) {
    console.error("Error fetching inventory:", error);
    sendErrorResponse(
      res,
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      ERROR_MESSAGES.SERVER_ERROR
    );
  }
};

// Update a inventory
const updateInventory = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedInventory = await update("inventory", {
      where: { id: parseInt(id) },
      data: req.body,
    });
    sendSuccessResponse(
      res,
      HTTP_STATUS.OK,
      updatedInventory,
      SUCCESS_MESSAGES.INVENTORY_UPDATED
    );
  } catch (error) {
    console.error("Error updating inventory:", error);
    sendErrorResponse(
      res,
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      ERROR_MESSAGES.SERVER_ERROR
    );
  }
};

// Delete a inventory
const deleteInventory = async (req, res) => {
  try {
    const { id } = req.params;
    await removeAll("equipment", {
      inventoryId: parseInt(id),
    });
    await remove("inventory", {
      id: parseInt(id),
    });
    sendSuccessResponse(
      res,
      HTTP_STATUS.OK,
      null,
      SUCCESS_MESSAGES.INVENTORY_DELETED
    );
  } catch (error) {
    console.error("Error deleting inventory:", error);
    sendErrorResponse(
      res,
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      ERROR_MESSAGES.SERVER_ERROR
    );
  }
};

export default {
  addInventory,
  getAllInventories,
  getInventoryById,
  updateInventory,
  deleteInventory,
};
