const News = require('../models/News');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function(req, res) {
    try {

    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async function(req, res) {
    try {
        const news = await News.findById(req.params.id);
        res.status(200).json(news);
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.create = async function(req, res) {
    try {
        const news = await new News({
            title: req.body.title,
            date: req.body.date,
            content: req.body.content
        }).save();
        res.status(201).json(news);
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function (req, res) {
    try {
        await News.remove(req.params.id);
        res.status(200).json({
            message: 'Новину видалено з бази даних.'
        });
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function(req, res) {
    try {
        const news = await News.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        );
        res.status(201).json(news);
    } catch(e) {
        errorHandler(res, e)
    }
}
