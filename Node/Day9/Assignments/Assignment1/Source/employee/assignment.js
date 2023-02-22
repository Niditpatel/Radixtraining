const router = require('express').Router();
const database = require('../database');
const {AuthorizationforEmployee} = require('../Authentication/verifyauth')


router.use(AuthorizationforEmployee);
router.get('/assignment',(req,res)=>{
    let Singleuser = req.user;
    let Exists = database.Employees.find((u)=>(u.Name).toLowerCase().trim() === (Singleuser.username).toLowerCase().trim());
    if(Exists){
        res.status(200).json(Exists.Assignment);
    }
    else{
        res.status(404).json({message:"Your Data is Not available"});
    }
});

module.exports = router;