const AppointmentFinancing = require('../models/AppointmentFinancing');
const Appointment = require('../models/Appointment');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function(req, res) {
    try {
        const expenses = await AppointmentFinancing.find();
        res.status(200).json(expenses);
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async function(req, res) {
    try {
        const appointmentFinancing = await AppointmentFinancing.findById(req.params.id);
        res.status(200).json(appointmentFinancing);
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.create = async function(req, res) {
    try {
        const appointment = await Appointment.findById({_id: req.body.appointment.id});
        const expenses = await new AppointmentFinancing({
            appointment,
            expensesPlan: {
                kekv2210: req.body.expensesPlan.kekv2210,
                kekv2220: req.body.expensesPlan.kekv2220,
                kekv2240: req.body.expensesPlan.kekv2240,
                total: req.body.expensesPlan.total,
            },
                userID: req.user.id
        }).save();
        res.status(201).json(expenses);
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function(req, res) {
    try {
        await AppointmentFinancing.remove({_id: req.params.id});
        res.status(200).json({
            message: 'Витрати видалено з бази даних.'
        });
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function(req, res) {
    try {
        const expenses = await AppointmentFinancing.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        );
        res.status(201).json(expenses);
    } catch(e) {
        errorHandler(res, e)
    }
}
