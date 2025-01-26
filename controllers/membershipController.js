// const prisma = require('../prisma/client'); // Import the Prisma client
const { create, findMany, update, remove } = require('../services/common');
const { sendSuccessResponse, sendErrorResponse } = require('../utils/responseFormatter');
const { HTTP_STATUS, SUCCESS_MESSAGES, ERROR_MESSAGES } = require('../errors/ApiError');

// Create a new membership
const addMembership = async (req, res) => {
    try {
        const membership = await create('membership', req.body);
        sendSuccessResponse(res, HTTP_STATUS.CREATED, membership, SUCCESS_MESSAGES.MEMBERSHIP_CREATED);
    } catch (error) {
        console.error('Error adding membership:', error);
        sendErrorResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, ERROR_MESSAGES.SERVER_ERROR);
    }
};

// Get all memberships
const getAllMemberships = async (req, res) => {
    try {
        const memberships = await findMany('membership', { id: true, name: true, description: true, price: true });
        sendSuccessResponse(res, HTTP_STATUS.OK, memberships, SUCCESS_MESSAGES.FETCHED_SUCCESS);
    } catch (error) {
        console.error('Error fetching memberships:', error);
        sendErrorResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, ERROR_MESSAGES.SERVER_ERROR);
    }
};

// Get a single membership by ID
const getMembershipById = async (req, res) => {
    try {
        const { id } = req.params;

        const membership = await prisma.membership.findUnique({
            where: { id: parseInt(id) },
        });

        if (!membership) {
            sendErrorResponse(res, HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.NOT_FOUND);
            return;
        }

        sendSuccessResponse(res, HTTP_STATUS.OK, membership, SUCCESS_MESSAGES.FETCHED_SUCCESS);
    } catch (error) {
        console.error('Error fetching membership:', error);
        sendErrorResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, ERROR_MESSAGES.SERVER_ERROR);
    }
};

// Update a membership
const updateMembership = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedMembership = await update('membership', {
            where: { id: parseInt(id) },
            data: req.body,
        });
        sendSuccessResponse(res, HTTP_STATUS.OK, updatedMembership, SUCCESS_MESSAGES.MEMBERSHIP_UPDATED);
    } catch (error) {
        console.error('Error updating membership:', error);
        sendErrorResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, ERROR_MESSAGES.SERVER_ERROR);
    }
};

// Delete a membership
const deleteMembership = async (req, res) => {
    try {
        const { id } = req.params;
        await remove('membership', {
            id: parseInt(id),
        });
        sendSuccessResponse(res, HTTP_STATUS.OK, null, SUCCESS_MESSAGES.MEMBERSHIP_DELETED);
    } catch (error) {
        console.error('Error deleting membership:', error);
        sendErrorResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, ERROR_MESSAGES.SERVER_ERROR);
    }
};

// Assign a membership to a user
const assignMembershipToUser = async (req, res) => {
    try {
        const { userId, membershipId, startDate, endDate } = req.body;
        console.log('Received request to assign membership to user:', userId, membershipId, new Date(startDate), endDate);

        const userMembership = await create('userMembership', {
            data: {
                userId,
                membershipId,
                startDate: new Date(startDate),
                endDate: endDate ? new Date(endDate) : null,
            },
        });
        sendSuccessResponse(res, HTTP_STATUS.CREATED, userMembership, SUCCESS_MESSAGES.MEMBERSHIP_ASSIGNED);
    } catch (error) {
        console.error('Error assigning membership to user:', error);
        sendErrorResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, ERROR_MESSAGES.SERVER_ERROR);
    }
};

// Get all memberships of a user
const getMembershipsByUserId = async (req, res) => {
    try {
        const { userId } = req.params;

        const memberships = await prisma.userMembership.findMany({
            where: { userId: parseInt(userId) },
            include: { membership: true }, // Fetch membership details
        });

        sendSuccessResponse(res, HTTP_STATUS.OK, memberships, SUCCESS_MESSAGES.FETCHED_SUCCESS);
    } catch (error) {
        console.error('Error fetching user memberships:', error);
        sendErrorResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, ERROR_MESSAGES.SERVER_ERROR);
    }
};

module.exports = {
    addMembership,
    getAllMemberships,
    getMembershipById,
    updateMembership,
    deleteMembership,
    assignMembershipToUser,
    getMembershipsByUserId,
};
