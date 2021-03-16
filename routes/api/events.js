const express = require('express');
const router = express.Router();
const Events = require('../../models/Events')
const validateEventInput=require('../../validation/events')
// @route  GET /events
// @desc   events page getting events
// @access Public
router.get('/', (req, res) => {
    Events.find().sort({ date: -1 }).then(events => res.json(events));
    
    
})


// @route  POST /events
// @desc   adding events
// @access Public
router.post('/', (req, res) => {

    const { errors, isValid } = validateEventInput(req.body)
    if (!isValid) {
        return res.status(400).json(errors)
    }
 

    const newEvents = new Events({
        header: req.body.header,
        // mainBool: req.body.mainBool,
        shortabout: req.body.shortabout,
        about: req.body.about,
        location: req.body.location,
        photo1: req.body.photo1,
        photo2: req.body.photo2,
        photo3: req.body.photo3,
        photo4: req.body.photo4,
        photo5: req.body.photo5,
        membersPresent: req.body.membersPresent.split(','),
        date: req.body.date,
    });

    newEvents.save().then(eve => res.json(eve));


})
// @route  DELETE /events/:id
// @desc   deleting events
// @access Public
router.delete('/:id', (req, res) => {
  
   Events.findByIdAndDelete(req.params.id).then(event=>res.json(event)).catch(err=>res.json({error:"this is an error"}))

})

module.exports = router;
