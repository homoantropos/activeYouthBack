const express = require('express');
const controller = require('../controllers/statistic');
const router = express.Router()

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.delete('/:id', controller.remove);
router.patch('/:id', controller.update);


module.exports = router