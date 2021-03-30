const Participant = require('../models/Participant');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function(req, res) {
    try {

    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async function(req, res) {
    try {
        const participant = await Participant.findById(req.params.id);
        res.status(200).json(participant);
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
