const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coachSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('coaches', coachSchema)
