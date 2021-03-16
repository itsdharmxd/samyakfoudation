const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const MembersSchema = new Schema({
    picture: {
        type: Schema.Types.String,
        required: true,

    },
    status: {
        type: Schema.Types.String,
        required: true,

    },
    name: {
        type: Schema.Types.String,
        required: true,

    },
    description: {
        type: Schema.Types.String,
        required: true,

    },
    dateofjoining: {
        type: Date,
        default: Date.now
    }
});

module.exports = Members = mongoose.model('members', MembersSchema);
