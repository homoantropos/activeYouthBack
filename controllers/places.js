const Place = require('../models/Place');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function(req, res) {
    try {

    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async function(req, res) {
    try {
        const place = await Place.findById(req.params.id);
        res.status(200).json(place);
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
            address: req.body.address,
        }).save();
        res.status(201).json(place);
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function (req, res) {
    try {
        await Place.remove(req.params.id);
        res.status(200).json({
            message: 'Місце проведення видалено з бази даних.'
        });
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function(req, res) {
    try {
        const place = await Place.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        );
        res.status(201).json(place);
    } catch(e) {
        errorHandler(res, e)
    }
}
