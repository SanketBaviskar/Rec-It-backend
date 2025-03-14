import {createUser, findUserByEmail, findUserById, updateUser, deleteUserById, userList,} from "../services/userService.js";

import { findMany } from "../services/common";
import _default from "../utils/passwordUtils.js";
const { hashPassword, comparePasswords } = _default;
import __default from "../utils/jwtUtils.js";
const { generateToken } = __default;
import { sendSuccessResponse, sendErrorResponse } from "../utils/responseFormatter.js";
import ___default from "../errors/ApiError.js";
const {
  ERROR_MESSAGES, SUCCESS_MESSAGES, HTTP_STATUS,
} = ___default;

const addUser = async (req, res) => {
  try {
    const user = await createUser(req.body);
    sendSuccessResponse(
      res,
      HTTP_STATUS.CREATED,
      user,
      SUCCESS_MESSAGES.REGISTERED_SUCCESS
    );
  } catch (error) {
    console.log(error);
    sendErrorResponse(
      res,
      HTTP_STATUS.BAD_REQUEST,
      ERROR_MESSAGES.REGISTER_ERROR
    );
  }
};

const register = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    const hashedPassword = await hashPassword(password);
    const user = await createUser({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });
    sendSuccessResponse(
      res,
      HTTP_STATUS.CREATED,
      { userId: user.id },
      SUCCESS_MESSAGES.REGISTERED_SUCCESS
    );
  } catch (error) {
    sendErrorResponse(
      res,
      HTTP_STATUS.BAD_REQUEST,
      ERROR_MESSAGES.REGISTER_ERROR
    );
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    if (!user || !(await comparePasswords(password, user.password))) {
      sendErrorResponse(
        res,
        HTTP_STATUS.UNAUTHORIZED,
        ERROR_MESSAGES.INVALID_CREDENTIALS
      );
    }
    const token = generateToken(user.id);
    sendSuccessResponse(
      res,
      HTTP_STATUS.OK,
      { token },
      SUCCESS_MESSAGES.LOGIN_SUCCESS
    );
  } catch (error) {
    sendErrorResponse(res, HTTP_STATUS.BAD_REQUEST, ERROR_MESSAGES.LOGIN_ERROR);
  }
};

const getProfile = async (req, res) => {
  try {
    const user = await findUserById(req.user.id);
    if (!user) {
      console.error("user");
      sendErrorResponse(
        res,
        HTTP_STATUS.NOT_FOUND,
        ERROR_MESSAGES.USER_NOT_FOUND
      );
    }
    sendSuccessResponse(
      res,
      HTTP_STATUS.OK,
      { id: user.id, email: user.email, name: user.name },
      SUCCESS_MESSAGES.PROFILE_RETRIEVED
    );
  } catch (error) {
    console.error(error);
    sendErrorResponse(
      res,
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      ERROR_MESSAGES.PROFILE_NOT_FOUND
    );
  }
};

const updateProfile = async (req, res) => {
  try {
    const updatedUser = await updateUser(req.user.id, req.body);
    sendSuccessResponse(
      res,
      HTTP_STATUS.OK,
      updatedUser,
      SUCCESS_MESSAGES.PROFILE_UPDATED
    );
  } catch (error) {
    sendErrorResponse(
      res,
      HTTP_STATUS.BAD_REQUEST,
      ERROR_MESSAGES.PROFILE_UPDATED_ERROR
    );
  }
};

const deleteUser = async (req, res) => {
  try {
    await deleteUserById(req.user.id);
    sendSuccessResponse(
      res,
      HTTP_STATUS.OK,
      null,
      SUCCESS_MESSAGES.PROFILE_DELETED
    );
  } catch (error) {
    sendErrorResponse(
      res,
      HTTP_STATUS.BAD_REQUEST,
      ERROR_MESSAGES.PROFILE_DELETED_ERROR
    );
  }
};

const allUsers = async (req, res) => {
  try {
    const { search } = req.query;
    const users = await userList(search);
    sendSuccessResponse(res,HTTP_STATUS.OK,users,SUCCESS_MESSAGES.LIST_FOUND);
  } catch (error) {
    sendErrorResponse(res,HTTP_STATUS.INTERNAL_SERVER_ERROR,ERROR_MESSAGES.LIST_NOT_FOUND);
  }
};

export default {
  register,
  login,
  getProfile,
  updateProfile,
  deleteUser,
  allUsers,
  addUser,
};
