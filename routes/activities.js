const express = require('express');
const controller = require('../controllers/activities')
const router = express.Router()

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/create', controller.create);
router.delete('/delete/:id', controller.remove);
router.patch('/edit/:id', controller.update);


module.exports = router