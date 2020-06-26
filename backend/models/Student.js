const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    joining_year: {
        type: Number,
        required: true
    },
    passing_year: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    socials: {
        type: Array
    }
});

module.exports = mongoose.model('Student', StudentSchema);