const { ObjectId } = require('mongodb');
const productsModels = require('../models/productModel');
const { errName,
  errAlreadyExists,
  errQuantity,
  errNotANumber,
  erroWrongIdFormat,
} = require('../helper/index');

const getProducts = async () => {
  const products = await productsModels.getAll();
  return products;
};

const create = async (product) => {
  const { name, quantity } = product;

  if (name.length < 5) return errName;
  if (typeof quantity !== 'number') return errNotANumber;
  if (quantity <= 0) return errQuantity;

  const duplicateName = await productsModels.getByName(name);
  // const findName = duplicateName.find((productName) => productName.name === name);
  if (duplicateName) return errAlreadyExists;
  return productsModels.create(product);
};

// verifica se o nome é duplicado
// const validName = async ({ name }) => {
//   const product = await productsModels.getAll();
//   const findName = product.find((product) => product.name === name);
// };

const getId = async (id) => {
  // const { id } = product;
  if (!ObjectId.isValid(id)) {
    return erroWrongIdFormat;
  }
  const products = await productsModels.getById(id);
  return products;  
};

const updateProduct = async (product) => {
  const { name, quantity } = product;

  // if (!ObjectId.isValid(id)) {
  //   return erroWrongIdFormat;
  // }
  if (name.length < 5) return errName;
  if (typeof quantity !== 'number') return errNotANumber;
  if (quantity <= 0) return errQuantity;

  const products = await productsModels.update(product);
  return products;
};

const excludeProduct = async (id) => {
  // if (!ObjectId.isValid(id)) {
  //   return erroWrongIdFormat;
  // }

  const excludeId = await productsModels.exclude(id);
  return excludeId;
};

module.exports = {
  getProducts,
  create,
  getId,
  updateProduct,
  excludeProduct,
};
