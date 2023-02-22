const router = require('express').Router();
const jwt = require('jsonwebtoken');
const database = require('./database');



router.post('/login',(req,res)=>{
    let {name,password} =req.body;
    let user= database.find((u)=>u.name === name && u.password === password);
    if(user){
        res.setHeader("name",user.name);
        res.setHeader("password",user.password);
        let token = jwt.sign(user,process.env.sercetkey)
        const{password,...userWithOutPassword} = user;
        res.status(200).send({user:{...userWithOutPassword},token:token});
    }else{
        res.status(404).send('invalid username or password');
    }
});

router.post('/ragister',(req,res)=>{
    let {username,password} = req.body;
    let exists = database.find((u)=>u.name === username)
    if(exists)res.status(403).send('user already exists');
    else database.push(user)
    res.send(`${user.name} ragistered successfully`);  
});

module.exports = router;
