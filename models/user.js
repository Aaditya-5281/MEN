const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    number: Number,
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        default: 'male'
    },
    date: Date,
    text: String
});

module.exports = mongoose.model('User', userSchema);
