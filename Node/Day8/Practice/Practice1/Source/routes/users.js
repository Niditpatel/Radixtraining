var express = require('express');
var router = express.Router();
let jwt = require('jsonwebtoken');
let config = require('../config');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',(req,res,next)=>{
  let userdata ={
    username : req.body.username,
    password : req.body.password
  };
  let token = jwt.sign(userdata,config.secretkey,{
    algorithm:config.algo
  });
  if(userdata.username === "admin" && userdata.password ==="admin"){
    res.status(200).json({
      message: 'Login successFull',
      Jwttoken : token
    });
  }
  else{
    res.status(401).json({
      message :"Login Failed"
    });
  }
});

module.exports = router;