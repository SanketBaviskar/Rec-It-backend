const { register } = require("../controllers/userController");

// Error messages
const ERROR_MESSAGES = {
  LIST_NOT_FOUND: 'Unable to retrieve list',
  NOT_FOUND: 'Resource not found',
  UNAUTHORIZED: 'Unauthorized access',
  FORBIDDEN: 'Forbidden access',
  VALIDATION_ERROR: 'Validation error',
  INTERNAL_SERVER_ERROR: 'Internal server error',
  BAD_REQUEST: 'Bad request',
  DUPLICATE_EMAIL: 'Email already exists',
  INVALID_CREDENTIALS: 'Invalid email or password',
  TOKEN_EXPIRED: 'Token has expired',
  INVALID_TOKEN: 'Invalid token',
  INTERNAL_SERVER_ERROR: 'Internal server error',
  //AUTH
  REGISTER_ERROR: 'Unable to register user',
  LOGIN_ERROR: 'Unable to login',
  USER_NOT_FOUND: 'User not found',
  PROFILE_NOT_FOUND:'Unable to retrieve profile',
  PROFILE_UPDATED_ERROR:'Unable to update profile',
  PROFILE_DELETED_ERROR:'Unable to delete profile',
};

// Success messages
const SUCCESS_MESSAGES = {
  FETCHED_SUCCESS: 'Success',
  LIST_FOUND: 'List retrieved successfully',
  RESOURCE_CREATED: 'Resource created successfully',
  RESOURCE_UPDATED: 'Resource updated successfully',
  RESOURCE_DELETED: 'Resource deleted successfully',
  LOGIN_SUCCESS: 'Logged in successfully',
  LOGOUT_SUCCESS: 'Logged out successfully',
  PASSWORD_RESET: 'Password reset successfully',
  EMAIL_SENT: 'Email sent successfully',
  //AUTH
  REGISTERED_SUCCESS: 'User Registered successfully',
  PROFILE_RETRIEVED:'Profile retrieved successfully',
  PROFILE_UPDATED:'Profile updated successfully',
  PROFILE_DELETED:'Profile deleted successfully',
  //MEMBERSHIP
  MEMBERSHIP_CREATED: 'Membership created successfully',
  MEMBERSHIP_UPDATED: 'Membership updated successfully',
  MEMBERSHIP_DELETED: 'Membership deleted successfully',
  MEMBERSHIP_ASSIGNED: 'Membership assigned to user successfully',
  MEMBERSHIP_REVOKED: 'Membership removed from user successfully',
  //INVENTORY
  INVENTORY_CREATED: 'Inventory created successfully',
  INVENTORY_UPDATED: 'Inventory updated successfully',
  INVENTORY_DELETED: 'Inventory deleted successfully',
  INVENTORY_ASSIGNED: 'Inventory assigned to user successfully',
  INVENTORY_REVOKED: 'Inventory removed from user successfully',
};

// HTTP Status codes
const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

module.exports = { ERROR_MESSAGES, SUCCESS_MESSAGES, HTTP_STATUS };