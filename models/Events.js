const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const EventSchema = new Schema({
   
    header: {
        type: Schema.Types.String,
        required: true,
        max: 40
    },
  
 
    about: {
        type: String
    },
    
    location: {
        type: String
    },
   
    photo1: {
        type: String,
       
    },
      photo2: {
        type: String,
       
    },
      photo3: {
        type: String,
       
    },
      photo4: {
        type: String,
       
    },
    photo5: {
        type: String,

    },
    membersPresent: [
        String,
    ],
   
    
    date: {
        type: Date,
      
    }
});

module.exports = Events = mongoose.model('event', EventSchema);
