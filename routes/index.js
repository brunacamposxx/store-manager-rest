const router = require('express').Router();
const salesController = require('../controllers/salesController');
const productsController = require('../controllers/productsController');

router.post('/sales', salesController.createSale);
router.get('/sales', salesController.getAllSales);
router.get('/sales/:id', salesController.getByIdSale);
router.put('/sales/:id', salesController.updateOne);
router.delete('/sales/:id', salesController.excludeSale);

router.post('/products', productsController.createProduct);
router.get('/products', productsController.getAllProducts);
router.get('/products/:id', productsController.getByIdProduct);
router.put('/products/:id', productsController.updateOne);
router.delete('/products/:id', productsController.excludeProduct);

module.exports = router;