const router = require('express').Router();
const salesController = require('../controllers/salesController');

router.post('/sales', salesController.create);
router.get('/sales', salesController.getAll);
router.get('/sales/:id', salesController.getById);
router.put('/sales/:id', salesController.update);
router.delete('/sales/:id', salesController.exclude);

module.exports = router;