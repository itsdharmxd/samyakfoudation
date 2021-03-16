const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ContactSchema = new Schema({
    map: {
        type: Schema.Types.String,
        required: true,
    },
    phone1: {
        type: String,
        required: true
    },
    phone2: {
        type: String,
        required: true
    },   
    email: {
        type: String,
        required: true
    }, 
    address: {
        type: String,
        required: true
    },  

  
});

module.exports = Comment = mongoose.model('comment', ContactSchema);
