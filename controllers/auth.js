const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const keys = require('../config/keys');
const errorHandler = require('../utils/errorHandler')

module.exports.login = async function(req, res) {
    const candidate = await User.findOne({email: req.body.email});

    if(candidate) {
        const passwordCompare = bcrypt.compareSync(req.body.password, candidate.password)
        if(passwordCompare) {
           const token = jwt.sign({
               email: candidate.email,
               userId: candidate._id
            }, keys.jwt, {expiresIn: 60 * 60});
           res.status(200).json({
              token: `Bearer ${token}`
           });
        } else {
            res.status(401).json({
                message: 'INVALID_PASSWORD'
            })
        }
    } else {
        res.status(404).json({
            message: 'EMAIL_NOT_FOUND'
        })
    }
}


module.exports.register = async function(req, res) {
    const candidate = await User.findOne({email: req.body.email});
    if (candidate) {
        res.status(409).json({
          message: 'INVALID_EMAIL'
        })
    } else {
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password
        const user = new User(
            {
                email: req.body.email,
                password: bcrypt.hashSync(password, salt)
            }
        )
        try {
            await user.save();
            res.status(201).json(user);
        } catch(e) {
            errorHandler(res, e);
        }
    }
}

module.exports.getAll = async function(req, res) {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch(e) {
        errorHandler(res, e)
    }
}
