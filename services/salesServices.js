// const { ObjectId } = require('mongodb');
const salesModels = require('../models/saleModel');
const productsModel = require('../models/productModel');
const {
  errWrongIdOrQuantity,
  // erroWrongIdFormat,
} = require('../helper/index');

const createSale = async (sale) => {
  const { productId, quantity } = sale[0];
  await productsModel.getById(productId);

  if (quantity <= 0) return errWrongIdOrQuantity;
  if (typeof quantity !== 'number') return errWrongIdOrQuantity;

  return salesModels.create(sale);
};

const getSales = async () => {
  const sales = await productsModel.getAll();
  return sales;
};

const getSaleById = async (id) => {
  // if (!ObjectId.isValid(id)) {
  //   return errWrongIdOrQuantity;
  // }
  
  const sale = await salesModels.getById(id);
  if (!sale) return errWrongIdOrQuantity;
  return sale;
};

module.exports = {
  createSale,
  getSales,
  getSaleById,
};