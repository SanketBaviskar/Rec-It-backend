// const prisma = require('../prisma/client'); // Import the Prisma client
import { create, findMany, update, remove, findUnique } from '../services/common';
import { sendSuccessResponse, sendErrorResponse } from '../utils/responseFormatter';
import {HTTP_STATUS, SUCCESS_MESSAGES, ERROR_MESSAGES } from '../errors/ApiError';

// Create a new facility
const addFacility = async (req, res) => {
    try {
        const facility = await create('facility', req.body);
        sendSuccessResponse(res, HTTP_STATUS.CREATED, facility, SUCCESS_MESSAGES.FACILITY_CREATED);

    } catch (error) {
        console.error('Error adding facility:', error);
        sendErrorResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, ERROR_MESSAGES.SERVER_ERROR);
    }
};

// Get all facilities
const getAllFacilities = async (req, res) => {
    try {
        const facilitys = await findMany('facility', { id: true, name: true, description: true, capacity: true, location: true, manager: true, createdAt: true, updatedAt: true });
        sendSuccessResponse(res, HTTP_STATUS.OK, facilitys, SUCCESS_MESSAGES.FETCHED_SUCCESS);
    } catch (error) {
        console.error('Error fetching facilitys:', error);
        sendErrorResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, ERROR_MESSAGES.SERVER_ERROR);
    }
};

// Get a single facility by ID
const getFacilityById = async (req, res) => {
    try {
        const { id } = req.params;

        const facility = await findUnique('facility', { id: parseInt(id) }, { id: true, name: true, description: true, capacity: true, location: true, manager: true, createdAt: true, updatedAt: true });

        if (!facility) {
            sendErrorResponse(res, HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.NOT_FOUND);
            return;
        }

        sendSuccessResponse(res, HTTP_STATUS.OK, facility, SUCCESS_MESSAGES.FETCHED_SUCCESS);
    } catch (error) {
        console.error('Error fetching facility:', error);
        sendErrorResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, ERROR_MESSAGES.SERVER_ERROR);
    }
};

// Update a facility
const updateFacility = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedFacility = await update('facility', {
            where: { id: parseInt(id) },
            data: req.body,
        });
        sendSuccessResponse(res, HTTP_STATUS.OK, updatedFacility, SUCCESS_MESSAGES.FACILITY_UPDATED);
    } catch (error) {
        console.error('Error updating facility:', error);
        sendErrorResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, ERROR_MESSAGES.SERVER_ERROR);
    }
};

// Delete a facility
const deleteFacility = async (req, res) => {
    try {
        const { id } = req.params;
        await remove('facility', {
            id: parseInt(id),
        });
        sendSuccessResponse(res, HTTP_STATUS.OK, null, SUCCESS_MESSAGES.FACILITY_DELETED);
    } catch (error) {
        console.error('Error deleting facility:', error);
        sendErrorResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, ERROR_MESSAGES.SERVER_ERROR);
    }
};


export default {
    addFacility,
    getAllFacilities,
    getFacilityById,
    updateFacility,
    deleteFacility,
};
