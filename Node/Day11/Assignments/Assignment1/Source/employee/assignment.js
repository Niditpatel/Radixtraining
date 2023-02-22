const router = require('express').Router();
const database = require('../models/database');
const { Employee } = require('../models/employeeModel');
const { AuthorizationforEmployee, TokenVerify } = require('../Authentication/verifyauth')


router.use(TokenVerify);
router.use(AuthorizationforEmployee);
router.get('/assignment', async (req, res) => {
    let Singleuser = req.user;
    let Exists = await Employee.find({ ID: Singleuser.id });
    if (Exists) {
        res.status(200).json(Exists[0].Assignment);
    }
    else {
        res.status(404).json({ message: "Your Data is Not available" });
    }
});

router.post('/assignment', async (req, res) => {
    let Singleuser = req.user;
    let Exists = await Employee.find({ ID: Singleuser.id });
    console.log(Object.values(Exists[0].Assignment)[0]== undefined);
    if (Exists.length > 0  && Object.values(Exists[0].Assignment)[0] != undefined) {
        res.status(200).json({ message: "data is already exists" });
    }
    else if(Exists.length > 0  && Object.values(Exists[0].Assignment)[0] == undefined){
        const updatedoc = await  Employee.findOneAndUpdate({ID:Singleuser.id}, {Assignment: req.body.Assignment},{new:true});
        res.status(200).json({message:"addedd successfully",data : updatedoc.Assignment});
    }
    else {
        new Employee({
            "ID": Singleuser.id,
            "Name": Singleuser.username,
            "Address": Singleuser.password,
            "Assignment": { "Assign_name": req.body.Assign_name, "Status": req.body.status }
        }).save();
    }
});

router.put('/assignment', async (req, res) => {
    let Singleuser = req.user;
    let Exists = await Employee.find({ID:Singleuser.id});
    if (Exists.length > 0 && Object.values(Exists[0].Assignment)[0] != undefined)  {
      const updatedoc = await  Employee.findOneAndUpdate({ID:Singleuser.id}, {Assignment: req.body},{new:true});
      res.status(200).json(updatedoc.Assignment);
    } else {
        res.status(404).json({ message: 'you have no data to update' });
    }
});

router.delete('/assignment',async(req,res)=>{
    let Singleuser = req.user;
    let Exists = await Employee.find({ID:Singleuser.id});
    console.log(Exists[0].Assignment);
    console.log((Exists[0].Assignment));
    if (Exists.length > 0 && Object.values(Exists[0].Assignment)[0] != undefined) {
      const updatedoc = await  Employee.updateOne({ID:Singleuser.id},{$unset:{Assignment:""}} ,{new:true});
      res.status(200).json({message:"deleted successfully"});
    } else {
        res.status(404).json({ message: 'you have no data to delete' });
    }
});

module.exports = router;