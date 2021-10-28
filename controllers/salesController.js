const saleService = require('../services/salesServices');
const { STATUS_CODE_UNPROCESSABLE_ENTITY,
  STATUS_CODE_OK,
  STATUS_CODE_NOT_FOUND } = require('../helper/index');

const create = async (req, res) => {
  const sales = await saleService.create(req.body);
  if (sales.err) {
    return res.status(STATUS_CODE_UNPROCESSABLE_ENTITY).json(sales);
  }
  return res.status(STATUS_CODE_OK).json(sales);
};

const getAll = async (_req, res) => {
  const sales = await saleService.getAll();
  return res.status(STATUS_CODE_OK).json(sales);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const sales = await saleService.getById(id);
  if (sales.err) { 
    return res.status(STATUS_CODE_NOT_FOUND).json(sales);
  }
  return res.status(STATUS_CODE_OK).json(sales);
};

const update = async (req, res) => {
  const { id } = req.params;
  const sales = req.body;
  
  const sale = await saleService.update(id, sales);
  if (sale.err) {
    return res.status(STATUS_CODE_UNPROCESSABLE_ENTITY).json(sale);
  }
  return res.status(STATUS_CODE_OK).json(sale);
};

const exclude = async (req, res) => {
  const { id } = req.params;

  const excludedProduct = await saleService.exclude(id);
  if (excludedProduct.err) {
    return res.status(STATUS_CODE_UNPROCESSABLE_ENTITY).json(excludedProduct);
  }
  res.status(STATUS_CODE_OK).json(excludedProduct);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  exclude,
};
