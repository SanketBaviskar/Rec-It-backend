const {
    create,
    findMany,
    update,
    remove,
    findUnique,
} = require("../services/common");
const equipmentService = require("../services/equipmentService");
const {
    sendSuccessResponse,
    sendErrorResponse,
} = require("../utils/responseFormatter");
const {
    HTTP_STATUS,
    SUCCESS_MESSAGES,
    ERROR_MESSAGES,
} = require("../errors/ApiError");

// Create a new equipment
const addEquipment = async (req, res) => {
    try {
        const equipment = await create("equipment", req.body);
        sendSuccessResponse(
            res,
            HTTP_STATUS.CREATED,
            equipment,
            SUCCESS_MESSAGES.INVENTORY_CREATED
        );
    } catch (error) {
        console.error("Error adding equipment:", error);
        sendErrorResponse(
            res,
            HTTP_STATUS.INTERNAL_SERVER_ERROR,
            ERROR_MESSAGES.SERVER_ERROR
        );
    }
};

const getAllEquipments = async (req, res) => {
    try {
        const { inventoryId } = req.query;
        const equipments = await equipmentService.getAllEquipments(inventoryId);
        sendSuccessResponse(
            res,
            HTTP_STATUS.OK,
            equipments,
            SUCCESS_MESSAGES.FETCHED_SUCCESS
        );
    } catch (error) {
        sendErrorResponse(
            res,
            HTTP_STATUS.INTERNAL_SERVER_ERROR,
            ERROR_MESSAGES.SERVER_ERROR
        );
    }
};

// Get a single equipment by ID
const getEquipmentById = async (req, res) => {
    try {
        const { id } = req.params;
        const equipment = await findUnique(
            "equipment",
            { id: parseInt(id) },
            {
                id: true,
                name: true,
                code: true,
                image: true,
                quantity: true,
                replacementFees: true,
                description: true,
                location: true,
                inventoryId: true,
                inventory: {
                    select: {
                        name: true
                    }
                },
                createdAt: true,
                updatedAt: true,
            }
        );
        if (!equipment) {
            sendErrorResponse(res, HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.NOT_FOUND);
            return;
        }
        sendSuccessResponse(
            res,
            HTTP_STATUS.OK,
            equipment,
            SUCCESS_MESSAGES.FETCHED_SUCCESS
        );
    } catch (error) {
        console.error("Error fetching equipment:", error);
        sendErrorResponse(
            res,
            HTTP_STATUS.INTERNAL_SERVER_ERROR,
            ERROR_MESSAGES.SERVER_ERROR
        );
    }
};

// Update a equipment
const updateEquipment = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedEquipment = await update("equipment", {
            where: { id: parseInt(id) },
            data: req.body,
        });
        sendSuccessResponse(
            res,
            HTTP_STATUS.OK,
            updatedEquipment,
            SUCCESS_MESSAGES.INVENTORY_UPDATED
        );
    } catch (error) {
        console.error("Error updating equipment:", error);
        sendErrorResponse(
            res,
            HTTP_STATUS.INTERNAL_SERVER_ERROR,
            ERROR_MESSAGES.SERVER_ERROR
        );
    }
};

// Delete a equipment
const deleteEquipment = async (req, res) => {
    try {
        const { id } = req.params;
        await remove("equipment", {
            id: parseInt(id),
        });
        sendSuccessResponse(
            res,
            HTTP_STATUS.OK,
            null,
            SUCCESS_MESSAGES.INVENTORY_DELETED
        );
    } catch (error) {
        console.error("Error deleting equipment:", error);
        sendErrorResponse(
            res,
            HTTP_STATUS.INTERNAL_SERVER_ERROR,
            ERROR_MESSAGES.SERVER_ERROR
        );
    }
};

module.exports = {
    addEquipment,
    getAllEquipments,
    getEquipmentById,
    updateEquipment,
    deleteEquipment,
};
