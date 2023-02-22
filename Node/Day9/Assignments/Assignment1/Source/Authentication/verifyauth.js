const router = require('express').Router();
const jwt = require('jsonwebtoken');
const config  = require('../config');

const TokenVerify = (req,res,next)=>{
    Token = req.headers['token']
    if(Token){
        jwt.verify(Token,config.serectkey,{algorithms:config.algo},(err,user)=>{
            if(!err){
                req.user = user;
                next()
            }else{
                res.status(403).send('token is not valid');
                next();
            }
        })
    }else{
        res.status(401).send('Forbidden access');
    }
}

const AuthorizationforStudent =(req,res,next)=>{
    TokenVerify(req,res,()=>{
        console.log(req.user);
        if((req.user.Role).toLowerCase().trim() === 'student'){
            next()
        }else{
            res.status(403).json({
                message:"You are not student"
            })
        }
    })
}

const AuthorizationforEmployee =(req,res,next)=>{
    TokenVerify(req,res,()=>{
        console.log(req.user);
        if((req.user.Role).toLowerCase().trim() === 'employee'){
            next()
        }else{
            res.status(403).json({
                message:"You are not employee"
            })
        }
    })
}

module.exports ={AuthorizationforEmployee,AuthorizationforStudent,TokenVerify}