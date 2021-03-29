const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const educationEntitySchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    category: {
        type: Number,
        default: 0
    },
    type: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('educationentities', educationEntitySchema)
