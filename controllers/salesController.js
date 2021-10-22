const getAllSales = ( req, res) => {
  res.status(200).json({ message: 'Estou na rota getAllSales' });
};

module.exports = {
  getAllSales,
};
