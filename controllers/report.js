const Report = require('../models/Repost');
const Appointment = require('../models/Appointment');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function(req, res) {
    try {
        const report = await Report.find();
        res.status(200).json(report);
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async function(req, res) {
    try {
        const report = await Report.findById(req.params.id);
        res.status(200).json(report);
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.create = async function(req, res) {
    try {
        const appointment = Appointment.findById(req.appointment._id)
        const report = await new Report({
            appointment,
            membersPlan: req.body.membersPlan,
            personPerDayTotalPlan: req.body.personPerDayTotalPlan,
            userId: req.user.id
        }).save();
        res.status(201).json(report);
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function(req, res) {
    try {
        await Report.remove({_id: req.params.id});
        res.status(200).json({
            message: 'Звіт видалено з бази даних.'
        });
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function(req, res) {
    try {
        const report = await Report.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        );
        res.status(201).json(report);
    } catch(e) {
        errorHandler(res, e)
    }
}
