const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const appointmentSchema = new Schema({
        title: {
            type: String,
            required: true
        },
        startDate: {
            type: Date,
            required: true
        },
        finishDate: {
            type: Date,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        placeOfHolding: {
            ref: 'places',
            type: Schema.Types.ObjectId
        },
        organizationsParticipants: {
            type: String,
            required: true
        },
        character: {
            type: String,
            required: true
        },
        KPKV: {
          type: Number,
          required: true
        },
        participants: {
            type: String,
            required: true
        },
        sportKind: {
            type: String,
            required: true
        },
        direction: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        organiser: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            default: ''
        }
})

module.exports = mongoose.model('appointments', appointmentSchema)
