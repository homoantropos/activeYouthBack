const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statisticSchema = new Schema ({
    appointment: {
        ref: 'appointments',
        type: Schema.Types.ObjectId,
        required: true
    },
    numberOfParticipantsPlan: {
        countries: {
            type: Number,
            required: true
        },
        regions: {
            type: Number,
            default: 0
        },
        educationEntity: {
            type: Number,
            required: true
        },
        sportsmen: {
            type: Number,
            required: true
        },
        coaches: {
            type: Number,
            required: true
        },
        referees: {
            type: Number,
            required: true
        },
        others: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    },
    personPerDayTotalPlan: {
        type: Number,
        required: true
    },
    numberOfParticipantsFact: {
        countries: {
            type: Number,
            default: 0
        },
        regions: {
            type: Number,
            default: 0
        },
        educationEntity: {
            type: Number,
            default: 0
        },
        sportsmen: {
            type: Number,
            default: 0
        },
        coaches: {
            type: Number,
            default: 0
        },
        referees: {
            type: Number,
            default: 0
        },
        others: {
            type: Number,
            default: 0
        },
        total: {
            type: Number,
            default: 0
        }
    },
    personPerDayTotalFact: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('statistics', statisticSchema)
