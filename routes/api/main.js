const express = require('express');
const router = express.Router();
const Comment = require('../../models/Comment');
const MainPc = require('../../models/MainPC');
const Events = require('../../models/Events');
const Members = require('../../models/Members')
const validateCommentInput=require('../../validation/comment')
const passport = require('passport');

// router.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
// // @route   GET /
// @desc    main page
// @access  Public
router.get('/', (req, res) => {
    // res.json({ msg: 'sucess' })
    
    
    MainPc.findOne({ main: true }).then(mainpc => res.json(mainpc))
     
    .catch(err=>res.status(400).json({nomain:'no main'}))
    
})

// @route   POST /
// @desc    main page
// @access  Public









module.exports = router;
