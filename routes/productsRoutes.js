const router = require('express').Router();
const productsController = require('../controllers/productsController');

router.post('/products', productsController.createProduct);
router.get('/products', productsController.getAllProducts);
router.get('/products/:id', productsController.getByIdProduct);
router.put('/products/:id', productsController.updateProduct);
router.delete('/products/:id', productsController.excludeProduct);

module.exports = router;
