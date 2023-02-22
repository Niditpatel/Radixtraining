const router = require('express').Router();
const database = require('../models/database');
const {Employee} = require('../models/employeeModel');
const {AuthorizationforEmployee,TokenVerify} = require('../Authentication/verifyauth')


router.use(TokenVerify);
router.use(AuthorizationforEmployee);
router.get('/assignment',async(req,res)=>{
    let Singleuser = req.user;
    let Exists = await Employee.find({ID:Singleuser.id});
    if(Exists){
        res.status(200).json(Exists[0].Assignment);
    }
    else{
        res.status(404).json({message:"Your Data is Not available"});
    }
});

module.exports = router;