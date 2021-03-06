const STATUS_CODE_OK = 200;
const STATUS_CODE_CREATED = 201;
const STATUS_CODE_UNPROCESSABLE_ENTITY = 422;
const STATUS_CODE_NOT_FOUND = 404;

const CODE_ERROR_422 = 'invalid_data';
const CODE_NOT_FOUND = 'not_found';

const MSG_ERROR_NAME_LENGTH = '"name" length must be at least 5 characters long';
const MSG_ERROR_ALREADY_EXISTS = 'Product already exists';
const MSG_ERROR_QUANTITY = '"quantity" must be larger than or equal to 1';
const MSG_ERROR_NOT_A_NUMBER = '"quantity" must be a number';
const MSG_ERROR_WRONG_ID_FORMAT = 'Wrong id format';
const MSG_ERROR_WRONG_ID_OR_QUANTITY = 'Wrong product ID or invalid quantity';
const MSG_ERROR_NOT_FOUND = 'Sale not found';
const MSG_ERROR_WRONG_ID_FORMAT_SALE = 'Wrong sale ID format';

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

const erroWrongIdFormat = {
  err: {
    code: CODE_ERROR_422,
    message: MSG_ERROR_WRONG_ID_FORMAT, 
  },
};

const errWrongIdOrQuantity = {
  err: {
    code: CODE_ERROR_422,
    message: MSG_ERROR_WRONG_ID_OR_QUANTITY,
  },
};

const errNotFound = {
  err: {
    code: CODE_NOT_FOUND,
    message: MSG_ERROR_NOT_FOUND,
  },
};

const errWrongIdFormatSale = {
  err: {
    code: CODE_ERROR_422,
    message: MSG_ERROR_WRONG_ID_FORMAT_SALE,
  },
};

module.exports = {
  errName,
  errAlreadyExists,
  errQuantity,
  errNotANumber,
  erroWrongIdFormat,
  errWrongIdOrQuantity,
  errNotFound,
  errWrongIdFormatSale,
  STATUS_CODE_OK,
  STATUS_CODE_CREATED,
  STATUS_CODE_UNPROCESSABLE_ENTITY,
  STATUS_CODE_NOT_FOUND,
  MSG_ERROR_WRONG_ID_OR_QUANTITY,
  CODE_ERROR_422,
};