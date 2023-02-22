const router = require('express').Router();
const jwt = require('jsonwebtoken');
const config = require('../config');
const database = require('../database');
router.use(require('express').json())


router.post('/login',(req,res)=>{
    let {username,password} = req.body;
    let user = database.users.find((u)=>u.username === username && u.Password === password);
    if(user){
        let token = jwt.sign(user,config.serectkey,{algorithm:config.algo});
        res.status(200).json({
            jwttoken:token
        });
    }else{
        res.status(404).json({
            message: "Invalid Username or password"
        });
    }
});

router.post('/ragister',(req,res)=>{
    let {username,password,role} =req.body;
    let exists = database.users.find((u)=>u.username === username && u.Role === role);
    if(exists)res.status(403).json({message:"User already Exists"});
    else database.users.push(req.body)
    res.status(200).json({message:"Ragistered successfully"})
});

module.exports = router;