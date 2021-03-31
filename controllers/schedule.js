const Appointment = require('../models/Appointment');
const Place = require('../models/Place')
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function(req, res) {
    try {
        const schedule = Appointment.find();
        res.status(200).json(schedule);
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async function(req, res) {
    try {
        const appointment = await Appointment.findById(req.params.id);
        res.status(200).json(appointment);
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.create = async function(req, res) {
    try {
        const place = await new Place({
            country: req.body.country,
            region: req.body.region,
            town: req.body.town,
            sportHallName: req.body.sportHallName,
            address: req.body.address
        })
        const appointment = await new Appointment({
            title: req.body.title,
            startDate: req.body.startDate,
            finishDate: req.body.finishDate,
            duration: req.body.duration,
            placeOfHolding: place,
            organizationsParticipants: req.body.organizationsParticipants,
            character: req.body.character,
            KPKV: req.body.KPKV,
            participants: req.body.participants,
            sportKind: req.body.sportKind,
            direction: req.body.direction,
            status: req.body.status,
            organiser: req.body.organiser,
            userId: "affsfsf"
            }
        ).save();
        res.status(201).json(appointment);
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function (req, res) {
    try {
        await Appointment.remove({_id: req.params.id});
        res.status(200).json({
            message: 'Захід видалено з бази даних.'
        });
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function(req, res) {
    try {
        const appointment = await Appointment.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        );
        res.status(201).json(appointment);
    } catch(e) {
        errorHandler(res, e)
    }
}
