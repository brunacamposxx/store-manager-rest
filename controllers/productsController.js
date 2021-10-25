const productsServices = require('../services/productsServices');
const { STATUS_CODE_UNPROCESSABLE_ENTITY,
  STATUS_CODE_CREATED } = require('../helper/index');

const getAllProducts = async (req, res) => {
  try {
    const products = await productsServices.getProducts();
    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Aconteceu erro ao buscar os dados no servidor' });
  }
};

const getByIdProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await productsServices.getById(id);
    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Aconteceu erro ao buscar os dados no servidor' });
  }
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

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;
    const products = await productsServices.update({ id, name, age });
    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Aconteceu erro ao buscar os dados no servidor' });
  }
};

const excludeProduct = async (req, res) => {
  try {
  const { id } = req.params;
  await productsServices.exclude({ id });
  return res.status(200).json({ message: 'registro deletado com sucesso' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Aconteceu erro ao buscar os dados no servidor' });
  }
};

module.exports = {
  getAllProducts,
  getByIdProduct,
  createProduct,
  updateProduct,
  excludeProduct,
};
