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

const updateOne = async (id, sales) => {
  // const { quantity, itensSold } = sales;
  const { quantity } = sales;

  if (quantity <= 0) return errWrongIdOrQuantity;
  if (typeof quantity !== 'number') return errWrongIdOrQuantity;

  const itensSold = [];
  const { _id, itensSold: sold } = await salesModels.update(id, sales);
  itensSold.push(sold);
  console.log(itensSold);
  const updateSale = { _id, itensSold };
  // console.log(updateSale);
  return updateSale;
};

const excludeOne = async (id) => {
  const deleteId = await salesModels.exclude(id);
  return deleteId;
};
module.exports = {
  createSale,
  getSales,
  getSaleById,
  updateOne,
  excludeOne,
};