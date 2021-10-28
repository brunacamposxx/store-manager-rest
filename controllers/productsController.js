const productsServices = require('../services/productsServices');
const { STATUS_CODE_UNPROCESSABLE_ENTITY,
  STATUS_CODE_CREATED,
  STATUS_CODE_OK } = require('../helper/index');

const getAll = async (req, res) => {
    const products = await productsServices.getAll();
    return res.status(STATUS_CODE_OK).json(products);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const products = await productsServices.getById(id);
    if (products.err) {
      return res.status(STATUS_CODE_UNPROCESSABLE_ENTITY).json(products);
    }
    return res.status(STATUS_CODE_OK).json(products);
};

const create = async (req, res) => {
    const product = req.body;
    const products = await productsServices.create(product);
    if (products.err) {
      return res.status(STATUS_CODE_UNPROCESSABLE_ENTITY).json(products);
    }
    return res.status(STATUS_CODE_CREATED).json(products);
};

const update = async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    const { name, quantity } = product;
    const products = await productsServices.update({ name, quantity, id });
    if (products.err) {
      return res.status(STATUS_CODE_UNPROCESSABLE_ENTITY).json(products);
    }
    return res.status(STATUS_CODE_OK).json(products);
};

const exclude = async (req, res) => {

  const { id } = req.params;
  const products = await productsServices.exclude(id);
  if (products.err) {
    return res.status(STATUS_CODE_UNPROCESSABLE_ENTITY).json(products);
  }
  return res.status(STATUS_CODE_OK).json(products);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  exclude,
};
