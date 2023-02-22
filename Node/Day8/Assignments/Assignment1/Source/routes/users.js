var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',(req,res)=>{
  let user ={
    name:req.body.name,
    password:req.body.password
  }
  let token = jwt.sign(user,config.serectkey,{algorithm:config.algo});
  if(user.name === "admin" && user.password === "admin"){
    res.status(200).json({
      message : "Login Successfull",
      jwttoken : token
    })
  }
  else{
    res.status(404).json({
      message:"invalid username or password"
    });
  }
})
module.exports = router;
