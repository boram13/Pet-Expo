const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['dog', 'cat', 'bird'],
        required: true
    },
    origin: {
        type: String,
        required: true
    },
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;