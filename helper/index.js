const STATUS_CODE_OK = 200;
const STATUS_CODE_CREATED = 201;
const STATUS_CODE_UNPROCESSABLE_ENTITY = 422;
const STATUS_CODE_NOT_FOUND = 404;

const CODE_ERROR_422 = 'invalid_data';

const MSG_ERROR_NAME_LENGTH = '"name" length must be at least 5 characters long';
const MSG_ERROR_ALREADY_EXISTS = 'Product already exists';
const MSG_ERROR_QUANTITY = '"quantity" must be larger than or equal to 1';
const MSG_ERROR_NOT_A_NUMBER = '"quantity" must be a number';

const errName = {
  err: {
    code: CODE_ERROR_422,
    message: MSG_ERROR_NAME_LENGTH,
  },
};

const errAlreadyExists = {
  err: {
    code: CODE_ERROR_422,
    message: MSG_ERROR_ALREADY_EXISTS,
  },
};

const errQuantity = {
  err: {
    code: CODE_ERROR_422,
    message: MSG_ERROR_QUANTITY,
  },
};

const errNotANumber = {
  err: {
    code: CODE_ERROR_422,
    message: MSG_ERROR_NOT_A_NUMBER,
  },
};

// const = {
//   err: {
//     code:
//     message:
//   },
// };

// const = {
//   err: {
//     code:
//     message:
//   },
// };

module.exports = {
  errName,
  errAlreadyExists,
  errQuantity,
  errNotANumber,
  STATUS_CODE_OK,
  STATUS_CODE_CREATED,
  STATUS_CODE_UNPROCESSABLE_ENTITY,
  STATUS_CODE_NOT_FOUND,
};