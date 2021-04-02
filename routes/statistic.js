const express = require('express');
const passport = require('passport');
const controller = require('../controllers/statistic');
const router = express.Router()

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll);
router.get('/:id', passport.authenticate('jwt', {session: false}), controller.getById);
router.post('/', controller.create);
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove);
router.patch('/:id', passport.authenticate('jwt', {session: false}), controller.update);


module.exports = router
