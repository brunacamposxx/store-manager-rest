const salesModels = require('../models/saleModel');
const {
  errWrongIdOrQuantity,
  errNotFound,
} = require('../helper/index');

const create = async (sale) => {
  const { quantity } = sale[0];

  if (quantity <= 0) return errWrongIdOrQuantity;
  if (typeof quantity !== 'number') return errWrongIdOrQuantity;

  return salesModels.create(sale);
};

const getAll = async () => salesModels.getAll();

const getById = async (id) => {
  const sales = await salesModels.getById(id);
  if (!sales) return errNotFound;
  return sales;
};

const update = async (id, sales) => {
  const { quantity } = sales[0];
 
  if (quantity <= 0) return errWrongIdOrQuantity;
  if (typeof quantity !== 'number') return errWrongIdOrQuantity;

  const itensSold = [];
  const { _id, itensSold: sold } = await salesModels.update(id, sales);
  itensSold.push(sold);
  const xablau = { _id, itensSold };
  return xablau;
};

const exclude = async (id) => {
  const deleteId = await salesModels.exclude(id);
  return deleteId;
};
module.exports = {
  create,
  getAll,
  getById,
  update,
  exclude,
};