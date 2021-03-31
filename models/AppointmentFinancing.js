const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentFinancingSchema = new Schema ({
    appointment: {
        ref: 'appointments',
        type: Schema.Types.ObjectId,
        required: true
    },
    expensesPlan: {
        kekv2210: {
            type: Number,
            required: true
        },
        kekv2220: {
            type: Number,
            required: true
        },
        kekv2240: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        },
    },
    expensesFact: {
        kekv2210: {
            type: Number,
            default: 0
        },
        kekv2220: {
            type: Number,
            default: 0
        },
        kekv2240: {
            type: Number,
            default: 0
        },
        total: {
            type: Number,
            default: 0
        },
        userId: {
            type: String,
            required: true
        }
    }
})

module.exports = mongoose.model('appointmentfinancings', appointmentFinancingSchema)
