const productsServices = require('../services/productsServices');
const { STATUS_CODE_UNPROCESSABLE_ENTITY,
  STATUS_CODE_CREATED,
  STATUS_CODE_OK } = require('../helper/index');

const getAllProducts = async (req, res) => {
    const products = await productsServices.getProducts();
    return res.status(STATUS_CODE_OK).json(products);
};

const getByIdProduct = async (req, res) => {
  // try {
    const { id } = req.params;
    const products = await productsServices.getId(id);
    if (products.err) {
      return res.status(STATUS_CODE_UNPROCESSABLE_ENTITY).json(products);
    }
    return res.status(STATUS_CODE_OK).json(products);
  // } catch (error) {
  //   console.error(error);
  //   return res.status(500).json({ message: 'Aconteceu erro ao buscar os dados no servidor' });
  // }
};

const createProduct = async (req, res) => {
  // try {
    // const { name, quantity } = req.body;
    const product = req.body;
    const products = await productsServices.create(product);
    if (products.err) {
      return res.status(STATUS_CODE_UNPROCESSABLE_ENTITY).json(products);
    }
    return res.status(STATUS_CODE_CREATED).json(products);
  // } 
  // catch (error) {
  //   console.error(error);
  //     return res.status(500).json({ message: 'Aconteceu erro ao cadastrar os dados' });
  // }
};

const updateOne = async (req, res) => {
  // try {
    const { id } = req.params;
    const product = req.body;
    const { name, quantity } = product;
    const products = await productsServices.updateProduct({ name, quantity, id });
    if (products.err) {
      return res.status(STATUS_CODE_UNPROCESSABLE_ENTITY).json(products);
    }
    return res.status(STATUS_CODE_OK).json(products);
  // } catch (error) {
  //   console.error(error);
  //   return res.status(500).json({ message: 'Aconteceu erro ao buscar os dados no servidor' });
  // }
};

const excludeProduct = async (req, res) => {
  // try {
  const { id } = req.params;
  const products = await productsServices.excludeProduct(id);
  if (products.err) {
    return res.status(STATUS_CODE_UNPROCESSABLE_ENTITY).json(products);
  }
  return res.status(STATUS_CODE_OK).json(products);
  // } catch (error) {
  //   console.error(error);
  //   return res.status(500).json({ message: 'Aconteceu erro ao buscar os dados no servidor' });
  // }
};

module.exports = {
  getAllProducts,
  getByIdProduct,
  createProduct,
  updateOne,
  excludeProduct,
};
