const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PaymentSchema = new Schema({

    photo: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },

   



});

module.exports = Comment = mongoose.model('comment', PaymentSchema);
