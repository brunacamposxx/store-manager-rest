const { ObjectId } = require('mongodb');
const productsModels = require('../models/productModel');
const { errName,
  errAlreadyExists,
  errQuantity,
  errNotANumber,
  STATUS_CODE_OK,
  STATUS_CODE_CREATED,
  STATUS_CODE_UNPROCESSABLE_ENTITY,
  STATUS_CODE_NOT_FOUND
} = require('../helper/index');

const getProducts = async () => {
  const data = await productsModels.getAll();
  return data;
};

const create = async (product) => {

  const duplicateName = await productsModels.duplicateName({ name });
  if (duplicateName) return { errorCode: 'DUPLICATE_NAME' };
  return productsModels.create({ name, quantity });
};

// verifica se o nome é duplicado
// const duplicateName = async ({ name }) => {
// };

const validName = async ({ name }) => {
  const product = await productsModels.getAll();
  const findName = product.find((product) => product.name === name);

  if (findName) {
    return {
      status: 422,
      err: { code: 'invalid_data', message: 'Product already exists' },
    };
  }

  if (name.length < 5) {
    return { status: 422,
      err: { code: 'invalid_data', message: '"name" length must be at least 5 characters long'},
    };
  }
};

module.exports = {
  getProducts,
  create,
  validName,
};
