const saleService = require('../services/salesServices');
const { STATUS_CODE_UNPROCESSABLE_ENTITY,
  STATUS_CODE_OK,
  STATUS_CODE_NOT_FOUND } = require('../helper/index');

// const getAllSales = (req, res) => {
//   res.status(200).json({ message: 'Estou na rota getAllSales' });
// };

const createSale = async (req, res) => {
  const sales = await saleService.createSale(req.body);
  if (sales.err) {
    return res.status(STATUS_CODE_UNPROCESSABLE_ENTITY).json(sales);
  }
  return res.status(STATUS_CODE_OK).json(sales);
};

const getAllSales = async (_req, res) => {
  const sales = await saleService.getSales();
  return res.status(STATUS_CODE_OK).json(sales);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const sales = await saleService.getSaleById(id);
  if (sales.err) { 
    return res.status(STATUS_CODE_NOT_FOUND).json(sales);
  }
  return res.status(STATUS_CODE_OK).json(sales);
};

module.exports = {
  createSale,
  getAllSales,
  getSalesById,
};
