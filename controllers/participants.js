const Participant = require('../models/Participant');
const Coach = require('../models/Coach')
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function(req, res) {
    try {
        const participants = await Participant.find();
        res.status(200).json(participants);
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
        const coach = await Coach.findById(req.body.coach.id);
        const participant = await new Participant({
            name: req.body.name,
            surname: req.body.surname,
            fathersName: req.body.fathersName,
            DoB: req.body.DoB,
            gender: req.body.gender,
            schoolchildOrStudent: req.body.schoolchildOrStudent,
            coach
        }).save();
        res.status(201).json(participant);
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function(req, res) {
    try {
        await Participant.remove({_id: req.params.id});
        res.status(200).json({
            message: 'Учасника видалено з бази даних.'
        });
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function(req, res) {
    try {
        const participant = await Participant.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        );
        res.status(201).json(participant);
    } catch(e) {
        errorHandler(res, e)
    }
}
