const express = require('express');
const router = express.Router();
const passport = require('passport');

const controller = require('../controllers/coaches')


router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', passport.authenticate('jwt', {session: false}), controller.create);
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove);
router.patch('/:id', passport.authenticate('jwt', {session: false}), controller.update);

module.exports = router;
