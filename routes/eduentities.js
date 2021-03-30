const express = require('express');
const passport = require('passport');
const controller = require('../controllers/eduentities');
const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', passport.authenticate('jwt', {session: false}), controller.create);
router.post('/:id', passport.authenticate('jwt', {session: false}), controller.remove);
router.patch('/:id', passport.authenticate('jwt', {session: false}), controller.update);

module.exports = router
