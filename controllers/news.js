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

    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function (req, res) {
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
