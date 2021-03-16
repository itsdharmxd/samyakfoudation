const express = require('express');
const router = express.Router();
const MainPC = require('../../models/MainPC');
const validateMainPCInput=require('../../validation/mainpc')
//@route  GET /admin
//@desc   getting admin details
//@access Public
router.get('/', (req, res) => {
    MainPC.findOne({ main: true }).then(mainPC => res.json( mainPC ))
    .catch(err=>res.json({admin:"no admin"}))
})

//@route  POST /admin
//@desc   adding admin details
//@access Public
router.post('/', (req, res) => {

    const { errors, isValid } = validateMainPCInput(req.body)
    if (!isValid) {
        return res.status(400).json(errors);
    }

    MainPC.deleteOne({ main: true }).then(() => {
        const newmainPc = new MainPC({
            main: true,
            profile: req.body.profile,
            slider1: req.body.slider1,
            slider2: req.body.slider2,
            slider3: req.body.slider3,
            slider4: req.body.slider4,
            slider5: req.body.slider5,
            wwwb1: req.body.wwwb1,
            wwwb2: req.body.wwwb2,
            wwwb3: req.body.wwwb3,
            wwwb4: req.body.wwwb4,

            // humanity:req.body.humanity,
            // god:req.body.god,
            // salvation:req.body.salvation,
            // grace:req.body.grace,

        });

        newmainPc.save().then(mainpc=>res.json(mainpc))

    })
})








module.exports = router;
