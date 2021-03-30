const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const keys = require('../config/keys');

module.exports.login = async function(req, res) {
    const candidate = await User.findOne({email: req.body.email});

    if(candidate) {
        const passwordCompare = bcrypt.compareSync(req.body.password, candidate.password)
        if(passwordCompare) {
           const token = jwt.sign({
               email: candidate.email,
               userId: candidate._id
            }, 'keys.jwt', {expiresIn: 60 * 60});
           res.status(200).json({
              token: `Bearer: ${token}`
           });
        } else {
            res.status(401).json({
                message: 'Ви ввели невірний пароль. Повторіть спробу'
            })
        }
    } else {
        res.status(404).json({
            message: 'Користувач з таким емейл не існує. Перевірте правильність вводу'
        })
    }
}


module.exports.register = async function(req, res) {
    const candidate = await User.findOne({email: req.body.email});
    if (candidate) {
        res.status(401).json({
          message: 'Такий емайл вже занятий. Використайте інший'
        })
    } else {
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password
        const user = new User(
            {
                email: req.body.email,
                password: bcrypt.hashSync(password, salt),
                accessLevel: req.body.accessLevel,
                idToken: req.body.idToken
            }
        )
        try {
            await user.save();
            res.status(201).json(user);
        } catch(e) {
            console.log(e);
        }
    }
}
