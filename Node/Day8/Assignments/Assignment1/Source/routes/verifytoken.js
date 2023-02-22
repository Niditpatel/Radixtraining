const router = require('express').Router();
const jwt = require('jsonwebtoken')
const config = require('../config');

verifyToken = (req,res,next)=>{
    let token = req.headers['x-access-token'];
    if(token){
        jwt.verify(token,config.serectkey,{algorithms:config.algo},
            (err,user)=>{
                if(!err){
                    res.user = user;
                    console.log(user);
                    next();
                }else{
                    res.status(403).json({
                        message : "unauthorized access"
                    })
                }
            })
    }else{
        res.status(401).json({
            message :" forbidden access"
        })
    }
}
module.exports = verifyToken;