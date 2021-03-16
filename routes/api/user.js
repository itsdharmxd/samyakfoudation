const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User =require('../../models/User')
const validUserInput = require('../../validation/user')
const validate=require('validator');
const { default: validator } = require('validator');
const isEmpty = require('../../validation/is-empty')
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport =require('passport')

//@route  GET /user/:id
//@desc   getting the user
//@access public 

router.get('/:id', (req, res) => {
    User.findById(req.params.id).then(user => res.json(user))
        .catch(err=>res.status(400).json(err));
})

//@route  Posr /user/register
//@desc   register  the user
//@access public
router.post('/register', passport.authenticate('jwt', { session: false }) ,(req, res) => {
    
    const {errors,isValid}=validUserInput(req.body)

    if (!isValid) {
        return res.status(400).json(errors)
    }
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                errors.email = "Email already exists";
                return res.status(400).json(errors)
            } else {
                const avatar = gravatar.url(req.body.email, {
                    s: '200',
                    r: 'pg',
                    d: 'mm'
                });
                
                const newUser = User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    avatar,
                    date: req.body.date
                });
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                        .then(user => res.json(user))
                        .catch(err=>console.log(err))
            })
        })

 

        }
    })
     
   



})


//@route  Posr /user/login
//@desc   login  the user
//@access public

router.post('/login', (req, res) => {
   const  errors={}
    if (!validator.isEmail(req.body.email)) {
        errors.email = "must be an email";
       
    }
    if (isEmpty(req.body.password)) {
        errors.password = "password is required"

    }
    if (!isEmpty(errors)) {
       res.status(400).json(errors) 
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
         
        if (!user) {
            errors.email = "user not found";
            return res.status(400).json(errors);
        }

        bcrypt.compare(password, user.password).then(isMatch => {
               
            if (isMatch) {
                const payload = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    date: user.date,
                    avatar:user.avatar
                } 
                 
                //sign Token
                jwt.sign(payload,
                    keys.secretOrKey,
                    { expiresIn: "2 days" },
                    (err, token) => {
                        if (err) {
                           return console.log("no token produce")
                        }
                        res.json({
                            success: true,
                            token: 'Bearer ' + token,                           
                    })
                }
                )
             } else {
                errors.password = "password incorrect";
                return res.status(400).json(errors)
            }

        })


 

    })
    
   
})





module.exports = router;
