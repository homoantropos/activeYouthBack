const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema ({
    country: {
        type: String,
        required: true
    },
    region: {
        type: String,
        default: ''
    },
    town: {
        type: String,
        required: true
    },
    sportHallName: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    }
})

module.exports = mongoose.model('places', placeSchema)
