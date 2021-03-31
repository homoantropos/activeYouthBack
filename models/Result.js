const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = new Schema ({
    appointment: {
      required: true,
      ref: 'appointments',
        type: Schema.Types.ObjectId
    },
    participant: {
        ref: 'participants',
        type: Schema.Types.ObjectId,
        required: true
    },
    eduEntity: {
        ref: 'educationentities',
        type: Schema.Types.ObjectId,
        required: true
    },
    region: {
      type: String,
      required: true
    },
    discipline: {
        type: String,
        required: true
    },
    place: {
        type: Number,
        required: true
    },
    ratingPoints: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('results', resultSchema)
