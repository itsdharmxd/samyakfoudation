const express = require('express');
const router = express.Router();
const Members = require('../../models/Members')
const validateMemberInput=require('../../validation/member')
//@route  GET /members
//@desc   geting members
//@access Public

router.get('/', (req, res) => {
    Members.find().then(member=>res.json(member))
    
})


//@route  GET /members/:id
//@desc   geting members
//@access Public
router.get('/:id', (req, res) => {
    Members.findById(req.params.id).then(member => res.json(member))

})

//@route  POST /members
//@desc   adding members
//@access Public

router.post('/', (req, res) => {

    const { errors, isValid } = validateMemberInput(req.body);

    if (!isValid) {
       return res.status(400).json(errors);
    }

    const newMembers = new Members({
        picture:req.body.picture,
        status: req.body.status,
        name: req.body.name,
        description:req.body.description,
        dateofjoining:req.body.dateofjoining
    })
    newMembers.save().then(member => res.json(member));
})


//@route  DELETE /members/id
//@desc   deleteing members
//@access Public
router.delete('/:id', (req, res) => {
    
    Members.findByIdAndDelete(req.params.id).then(member => res.json(member));
  

})



module.exports = router;
