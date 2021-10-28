const router = require('express').Router();
const productsController = require('../controllers/productsController');

router.post('/products', productsController.create);
router.get('/products', productsController.getAll);
router.get('/products/:id', productsController.getById);
router.put('/products/:id', productsController.update);
router.delete('/products/:id', productsController.exclude);

module.exports = router;
