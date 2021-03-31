const Statistic = require('../models/Statistic');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function(req, res) {
    try {

    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async function(req, res) {
    try {
        const statistic = await Statistic.findById(req.params.id);
        res.status(200).json(statistic);
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.create = async function(req, res) {
    try {
        const statistic = await new Statistic({
            appointment: req.body.appointment.id,
            numberOfParticipantsPlan: req.body.numberOfParticipantsPlan,
            personPerDayTotalPlan: req.body.personPerDayTotalPlan,
            userId: req.user.id
        }).save();
        res.status(201).json(statistic);
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function(req, res) {
    try {
        await Statistic.remove(req.params.id);
        res.status(200).json({
            message: 'Статистичні дані видалено з бази даних.'
        });
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function(req, res) {
    try {
        const statistic = await Statistic.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        );
        res.status(201).json(statistic);
    } catch(e) {
        errorHandler(res, e)
    }
}
