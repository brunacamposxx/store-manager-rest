const productsServices = require('../services/productsServices');

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
  try {
    const { name, quantity } = req.body;
    await productsServices.create({ name, quantity });
    // if (data.errorCode && data.errorCode === 'DUPLICATE_NAME') {
      return res.status(validName.status).json({ message: 'Esse nome já está cadastrado' });
    }

    return res.status(201).json(data);
  } catch (error) {
    console.error(error);
      return res.status(500).json({ message: 'Aconteceu erro ao cadastrar os dados' });
  }
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
  return res.status(200).json({ message: 'registro deletado com sucesso'});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Aconteceu erro ao buscar os dados no servidor' });
  }
}

module.exports = {
  getAllProducts,
  getByIdProduct,
  createProduct,
  updateProduct,
  excludeProduct,
};
