// const { ObjectId } = require('mongodb');
const productsModels = require('../models/productModel');
const { errName,
  errAlreadyExists,
  errQuantity,
  errNotANumber,
} = require('../helper/index');

const getProducts = async () => {
  const data = await productsModels.getAll();
  return data;
};

const create = async (product) => {
  const { name, quantity } = product;

  if (name.length < 5) return errName;
  if (typeof quantity !== 'number') return errNotANumber;
  if (quantity <= 0) return errQuantity;

  const duplicateName = await productsModels.getAll(name);
  const findName = duplicateName.find((productName) => productName.name === name);
  if (findName) return errAlreadyExists;
  return productsModels.create(product);
};

// verifica se o nome é duplicado
// const duplicateName = async ({ name }) => {
// };

// const validName = async ({ name }) => {
//   const product = await productsModels.getAll();
//   const findName = product.find((product) => product.name === name);
// };

module.exports = {
  getProducts,
  create,
};
