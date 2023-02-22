const router = require('express').Router();
const jwt = require('jsonwebtoken');
const config = require('../config');

verifytoken = (req,res,next)=>{
    Token = req.headers['x-access-token'];
    console.log(Token);
    if(Token){
        jwt.verify(Token,config.secretkey,{algorithms:config.algo},(err,decoded)=>{
            if(!err){
                req.decoded = decoded;
                console.log(decoded);
                next()
            }else{
                let errdata = {
                    message : err.message
                }
                console.log(errdata);
                res.status(403).json({
                    message :'unauthorized access'
                });
                next();
            }
        })
    }else{
        res.status(401).send('forbidden access')
    }
}
router.use(verifytoken);
module.exports = router;

