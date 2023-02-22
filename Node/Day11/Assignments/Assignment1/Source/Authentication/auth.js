const router = require('express').Router();
const jwt = require('jsonwebtoken');
const config = require('../config');
const database = require('../models/database');
const {User} = require('../models/userModel');
router.use(require('express').json())


router.post('/login',async(req,res)=>{
    let {username,password} = req.body;
    let user = await User.findOne({$and:[{username: username},{password:password}]});
   const id = user._id.valueOf();
    if(user){
        let token = jwt.sign({id,username:username,password:password,Role:user.Role},config.serectkey,{algorithm:config.algo});
        res.status(200).json({...(user._doc),
            jwttoken:token
        });
    }else{
        res.status(404).json({
            message: "Invalid Username or password"
        });
    }
});

router.post('/ragister',async(req,res)=>{
    let {username,password,Role} =req.body;
    console.log(req.body)
    let Exists = await User.find({$and:[{username:username},{Role:Role}]});
    if( Exists.length > 0 ){ res.status(403).json({message:"User already Exists"})}
    else {
        try{
            new User({
                "username": username,
                "password": password,
                "Role": Role
            }).save();
        res.status(200).json({message:"Ragistered successfully"})
        }
        catch(err){
            console.log(err);
        } 
    }
});



module.exports = router;