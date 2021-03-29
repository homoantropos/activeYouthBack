const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const participantSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    fathersName: {
        type: String,
        default: ''
    },
    DoB: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    schoolchildOrStudent: {
        type: String,
        required: true
    },
    coach: {
        ref: 'coaches',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('participants', participantSchema)
