const jwt = require('jsonwebtoken');
const config = require('./config');


// verify user token 
const verifyToken = (req,res,next)=>{
    token = req.headers['token']
    if(token){
        jwt.verify(token,config.serectkey,{algorithms:config.algo},(err,user)=>{
            if(!err){
                req.user = user._doc;
                next();
            }else{
                res.status(403).send('Unauthenticated');
                next();
            }
        });
    }else{
        res.status(401).send("Forbidden Access");
    }
}

// verify for doctor 
const AuthorizationforDoctor = (req,res,next)=>{
    if((req.user.role).toLowerCase().trim() === 'doctor'){
        next()
    }else{
        res.status(403).json({
            Message : " you are not a Doctor"
        })
    }
}


// verify for Assistant 
const AuthorizationforAssistant = (req,res,next)=>{
    if((req.user.role).toLowerCase().trim() === "assistant"){
        next()
    }else{
        res.status(403).json({
            Message:"You Are not a Assistant"
        });
    }
}

// verify for admin
const AuthorizationforAdmin = (req,res,next)=>{
    if((req.user.role).toLowerCase().trim() === 'admin'){
        next()
    }else{
        res.status(403).json({
            Message:"You Are not a Admin"
        });
    }
}

module.exports ={verifyToken,AuthorizationforAssistant,AuthorizationforDoctor,AuthorizationforAdmin};