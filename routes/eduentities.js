const express = require('express');
const controller = require('/controllers/eduentities');
const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.post('/:id', controller.remove);
router.patch('/:id', controller.update);

module.exports = router