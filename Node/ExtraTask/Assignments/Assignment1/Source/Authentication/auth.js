const Jwt = require('jsonwebtoken');
const router = require('express').Router();
const { User, ValidateUser, valiadteLoginUser, } = require('../models/userModel');
const Config = require('./config');
const bcrypt = require('bcrypt');
const config = require('./config');



// ragister user 
router.post('/ragister', async (req, res) => {
    const RagisterUser = req.body;
    ValidateUser(req.body).then(async (value) => {
        let Exists = await User.findOne({ $or: [{ UserName: value.UserName }, { Email: value.Email }, { ContactNo: value.ContactNo }] });
        if (Exists) {
            res.status(400).json({
                message: "Account Already Exists"
            });
        }
        else {
            const Salt = await bcrypt.genSalt(10);
            const HashedPass = await bcrypt.hash(value.Password, Salt);
            const count = await User.find({}).count();
            try {
                new User({
                    ID: parseInt(count) + 1,
                    UserName: value.UserName,
                    F_Name: value.F_Name,
                    L_Name: value.L_Name,
                    Password: HashedPass,
                    Email: value.Email,
                    ContactNo: value.ContactNo,
                    DOB: value.DOB
                }).save();
                res.status(200).json({
                    message: "Ragistered Successfully"
                });
            } catch (error) {
                res.json({
                    message: error
                })
            }
        }
    }).catch((Error) => {
        res.json(
            Error
        )
    })
});


// login for user
router.post('/login', async (req, res) => {
    let { UserName, Password } = req.body;
   const {error,value} = valiadteLoginUser(req.body);
   if(error)res.json(error.details[0].message);
    // find user by username 
    let user = await User.findOne({UserName: UserName });
    const id = user._id.valueOf();
    const { _id, ...withoutid } = user;
    if (user) {
        // compare user password with saved hash password 
        const validpassword = await bcrypt.compare(Password, user.Password);
        if (validpassword) {
            // if pass match the give access 
            let token = Jwt.sign(
                { id, ...withoutid }
                ,config.SeReCtKey,
                { algorithm: config.algo }
            );
            res.status(200).json({
                message: 'login successfull', access: token
            });
        } else {
            res.status(404).json({
                message: 'invalid username or password'
            });
        }
    } else {
        res.status(404).json({
            message: "invalid username or password"
        });
    }
});

module.exports = router;