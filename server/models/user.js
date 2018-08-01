const mongoose = require('mongoose');

const User = mongoose.model('User', {
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        minlength: 1,
        trim: true
    }
});

module.exports = {User};