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
  if (duplicateName) return errAlreadyExists;
  return productsModels.create(product);
};

const getId = async (id) => {
  if (!ObjectId.isValid(id)) {
    return erroWrongIdFormat;
  }
  const products = await productsModels.getById(id);
  return products;  
};

const updateProduct = async (product) => {
  const { name, quantity } = product;
  if (name.length < 5) return errName;
  if (typeof quantity !== 'number') return errNotANumber;
  if (quantity <= 0) return errQuantity;

  const productsUpdated = await productsModels.update(product);
  return productsUpdated;
};

const excludeProduct = async (id) => {
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
