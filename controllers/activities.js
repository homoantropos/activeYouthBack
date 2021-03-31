const Activity = require('../models/Activity');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function(req, res) {
    try {
        const activities = await Activity.find();
        res.status(200).json(activities);
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async function(req, res) {
    try {
        const activity = await Activity.findById(req.params.id);
        res.status(200).json(activity);
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.create = async function(req, res) {
    try {
        const activity = await new Activity({
            title: req.body.title,
            author: req.body.author,
            content: req.body.content,
            date: req.body.date,
            kindOfActivity: req.body.kindOfActivity,
            userId: req.user.id
        }).save();
        res.status(201).json(activity);
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function (req, res) {
    try {
        await Activity.remove({_id: req.params.id});
        res.status(200).json({
            message: 'Активність видалена з бази даних.'
        });
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function(req, res) {
    try {
        const activity = await Activity.findByIdAndUpdate(
            {_id: req.params.id},
        {$set: req.body},
        {new: true}
        );
        res.status(201).json(activity);
    } catch(e) {
        errorHandler(res, e)
    }
}
