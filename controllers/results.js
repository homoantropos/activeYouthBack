const Result = require('../models/Result');
const Appointment = require('../models/Appointment');
const Participant = require('../models/Participant');
const EducationEntity = require('../models/EducationEntity');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function(req, res) {
    try {
        const results = await Result.find();
        res.status(200).json(results);
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async function(req, res) {
    try {
        const result = await Result.findById(req.params.id);
        res.status(200).json(result);
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.create = async function(req, res) {
    try {
        const appointment = await Appointment.findById(req.body.appointment.id);
        const participant = await Participant.findById(req.body.participant.id);
        const eduEntity = await EducationEntity.findById(req.body.eduEntity.id);
        const result = await new Result({
            appointment,
            participant,
            eduEntity,
            region: req.body.region,
            discipline: req.body.discipline,
            place: req.body.place,
            ratingPoints: req.body.ratingPoints,
            userId: req.user.id
        }).save();
        res.status(201).json(result);
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function (req, res) {
    try {
        await Result.remove({_id: req.params.id});
        res.status(200).json({
            message: 'Результат видалено з бази даних.'
        });
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function(req, res) {
    try {
        const result = await Result.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        );
        res.status(201).json(result);
    } catch(e) {
        errorHandler(res, e)
    }
}
