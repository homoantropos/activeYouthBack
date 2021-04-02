const express = require('express');
const passport = require('passport');
const controller = require('../controllers/schedule');
const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.delete('/:id', controller.remove);
router.patch('/:id', passport.authenticate('jwt', {session: false}), controller.update);


module.exports = router
