const router = require('express').Router();
const salesController = require('../controllers/salesController');

router.post('/sales', salesController.createSale);
router.get('/sales', salesController.getAllSales);
router.get('/sales/:id', salesController.getSalesById);
router.put('/sales/:id', salesController.update);
router.delete('/sales/:id', salesController.exclude);

module.exports = router;