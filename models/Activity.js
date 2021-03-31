const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema ({
        title:{
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        },
        kindOfActivity: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        }
})

module.exports = mongoose.model('activities', activitySchema)
