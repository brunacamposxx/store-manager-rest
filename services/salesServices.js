const salesModels = require('../models/saleModel');
const productsModel = require('../models/productModel');
const {
  errWrongIdOrQuantity,
  errNotFound,
} = require('../helper/index');

const createSale = async (sale) => {
  const { productId, quantity } = sale[0];
  await productsModel.getById(productId);

  if (quantity <= 0) return errWrongIdOrQuantity;
  if (typeof quantity !== 'number') return errWrongIdOrQuantity;

  return salesModels.create(sale);
};

const getSales = async () => salesModels.getAll();

const getSaleById = async (id) => {
  const sales = await salesModels.getById(id);
  if (!sales) return errNotFound;
  return sales;
};

module.exports = {
  createSale,
  getSales,
  getSaleById,
};