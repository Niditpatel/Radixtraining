const jwt = require('jsonwebtoken');

const TokenVerify = (req,res,next)=>{
    Token = req.headers['token']
    if(Token){
        jwt.verify(Token,process.env.sercetkey,(err,user)=>{
            if(!err){
                req.user = user;
                next()
            }else{
                res.status(403).send('token is not valid');
                next();
            }
        })
    }else{
        res.status(401).send('unauthicated')
    }
}

const AuthorizationforAdmin = (req,res,next)=>{
    TokenVerify(req,res,()=>{
        if(req.user.role === 'admin'){
            next()
        }else{
            res.status(403).send("you are not admin")
        }
    })
}

const AuthorizationforUser =(req,res,next)=>{
    TokenVerify(req,res,()=>{
        if(req.user.role === 'dev' || req.user.role ===  "admin"){
            next()
        }else{
            res.status(403).send("not authorised ")
        }
    })
}
module.exports={TokenVerify,AuthorizationforAdmin,AuthorizationforUser}