const EduEntity = require('../models/EducationEntity');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function(req, res) {
    try {

    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async function(req, res) {
    try {
        const eduEntity = await EduEntity.findById(req.params.id);
        res.status(200).json(eduEntity);
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
