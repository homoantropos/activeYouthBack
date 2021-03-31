const Coach = require('../models/Coach');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function(req, res) {
    try {
        const coaches = await Coach.find();
        res.status(200).json(coaches);
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async function(req, res) {
    try {
        const coach = await Coach.findById(req.params.id);
        res.status(200).json(coach);
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.create = async function(req, res) {
    try {
        const coach = await new Coach({
            name: req.body.name,
            surname: req.body.surname,
            fatherName: req.body.fatherName,
            gender: req.body.gender
        }).save();
        res.status(201).json(coach);
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function (req, res) {
    try {
        await Coach.remove({_id: req.params.id});
        res.status(200).json({
            message: 'Тренера видалено з бази даних.'
        });
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function(req, res) {
    try {
        const coach = await Coach.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        );
        res.status(201).json(coach);
    } catch(e) {
        errorHandler(res, e)
    }
}
