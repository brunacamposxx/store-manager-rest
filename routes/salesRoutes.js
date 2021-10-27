const router = require('express').Router();
const salesController = require('../controllers/salesController');

router.post('/sales', salesController.createSale);
router.get('/sales', salesController.getAllSales);
// router.get('/sales/:id', salesController.getByIdSale);
// router.put('/sales/:id', salesController.updateOne);
// router.delete('/sales/:id', salesController.excludeSale);

module.exports = router;