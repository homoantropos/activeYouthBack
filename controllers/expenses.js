const AppointmentFinancing = require('../models/AppointmentFinancing');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function(req, res) {
    try {

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

    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function(req, res) {
    try {

    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function(req, res) {
    try {

    } catch(e) {
        errorHandler(res, e)
    }
}
