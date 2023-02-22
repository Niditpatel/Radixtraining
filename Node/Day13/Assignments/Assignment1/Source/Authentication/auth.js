const jwt = require('jsonwebtoken');
const router = require('express').Router();
const { User, validateUser } = require('../models/User');
const config = require('./config');
const bcrypt = require('bcrypt');


router.use(require('express').json());


// login for user
router.post('/login', async (req, res) => {
    let { name, password } = req.body;
    // find user by username 
    let user = await User.findOne({ name: name });
    const id = user._id.valueOf();
    const { _id, ...withoutid } = user;
    if (user) {
        // compare user password with saved hash password 
        const validpassword = await bcrypt.compare(password, user.password);
        if (validpassword) {
            // if pass match the give access 
            let token = jwt.sign(
                { id, ...withoutid }
                , config.serectkey,
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


// ragister user
router.post('/ragister', async (req, res) => {
    let { name, password, role } = req.body;
    // const { error, value } = 
    validateUser(req.body).then(async(value) =>{
         // check for existence  of user
         let Exists = await User.find({ $and: [{ name: value.name }, { role: value.role }] });
         if (Exists.length > 0) {
             res.status(403).json({
                 message: " username already taken try using another name"
             });
         }
         else {
             // encrypt password 
             const salt = await bcrypt.genSalt(15);
             const hashedpass = await bcrypt.hash(value.password, salt);
             try {
                 new User({
                     'name': value.name,
                     'password': hashedpass,
                     'role': value.role
                 }).save();
                 res.status(200).json({
                     message: 'successfully ragistered....'
                 });
             } catch (e) {
                 res.json({
                     message: e._message
                 });
             }
         }
    }).catch(error =>{
        res.json({
            error: error.message
        })
    });
    // if (error) {
        
    // } else {
       
    // }

});

module.exports = router;