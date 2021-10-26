const router = require('express').Router();
// const rescue = require('express-rescue');
const productsController = require('../controllers/productsController');

router.post('/products', productsController.createProduct);
router.get('/products', productsController.getAllProducts);
router.get('/products/:id', productsController.getByIdProduct);
router.put('/products/:id', productsController.updateProduct);
router.delete('/products/:id', productsController.excludeProduct);

// router.post('/products', rescue(productsController.createProduct));
// router.get('/products', rescue(productsController.getAllProducts));
// router.get('/products/:id', rescue(productsController.getByIdProduct));
// router.put('/products/:id', rescue(productsController.updateProduct));
// router.delete('/products/:id', rescue(productsController.excludeProduct));

module.exports = router;
