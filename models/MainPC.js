const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const MainPCSchema = new Schema({
    main: {
        type: Schema.Types.Boolean,
        default:true,
        required: true,
    } ,
    profile: {
        type: Schema.Types.String,
        required: true,
    },
    slider1: {
        type: Schema.Types.String,
        required: true,    },
    slider2: {
        type: Schema.Types.String,
        required: true,    },
    slider3: {
        type: Schema.Types.String,
        required: true,    },
    slider4: {
        type: Schema.Types.String,
        required: true,
    },
    slider5: {
        type: Schema.Types.String,
        required: true,
    },
    wwwb1: {
        type: Schema.Types.String,
        required: true, 
    },
    wwwb2: {
        type: Schema.Types.String,
        required: true,
    },
    wwwb3: {
        type: Schema.Types.String,
        required: true,
    },
    wwwb4: {
        type: Schema.Types.String,
        required: true,
    },
    // humanity: {
    //     type: Schema.Types.String,
    //     required: true,
    // },
    // god: {
    //     type: Schema.Types.String,
    //     required: true,
    // },
    // salvation: {
    //     type: Schema.Types.String,
    //     required: true,
    // },
    // grace: {
    //     type: Schema.Types.String,
    //     required: true,
    // },

 
});

module.exports =  MainPC  = mongoose.model('mainpc', MainPCSchema);
