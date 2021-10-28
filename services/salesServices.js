const salesModels = require('../models/saleModel');
const productsModel = require('../models/productModel');
const {
  errWrongIdOrQuantity,
  errNotFound,
  MSG_ERROR_WRONG_ID_OR_QUANTITY,
  CODE_ERROR_422,
} = require('../helper/index');

const createSale = async (sale) => {
  const { productId, quantity } = sale[0];
  await productsModel.getById(productId);

  if (quantity <= 0) return errWrongIdOrQuantity;
  if (typeof quantity !== 'number') return errWrongIdOrQuantity;

  return salesModels.create(sale);
};

// const createSale = async (sale) => {
//   // const { productId, quantity } = sale[0];

//   // await productsModel.getById(productId);
//   // console.log(sale);
//   const { quantity } = sale;
//   if (quantity <= 0) return errWrongIdOrQuantity;
//   if (typeof quantity !== 'number') return errWrongIdOrQuantity;
//   const create = await salesModels.create(sale);
//   // console.log(create);
//   return create;
// };

const getSales = async () => salesModels.getAll();

const getSaleById = async (id) => {
  const sales = await salesModels.getById(id);
  if (!sales) return errNotFound;
  return sales;
};

const updateOne = async (id, sales) => {
  const { quantity } = sales[0];
 
  if (quantity <= 0 || typeof quantity !== 'number') {
        return { err: {
        code: CODE_ERROR_422,
        message: MSG_ERROR_WRONG_ID_OR_QUANTITY,
      } };
      }
  const itensSold = [];
  const { _id, itensSold: sold } = await salesModels.update(id, sales);
  itensSold.push(sold);
  const xablau = { _id, itensSold };
  return xablau;
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