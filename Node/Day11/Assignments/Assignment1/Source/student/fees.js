const router = require('express').Router();
const { Student } = require('../models/studentModel');
const { AuthorizationforStudent, TokenVerify } = require('../Authentication/verifyauth');

router.use(TokenVerify);
router.use(AuthorizationforStudent);


// get student fees 
router.get('/fees', (req, res) => {
    Filterpath(req, res);
});


// get student result 
router.get('/result', (req, res) => {
    Filterpath(req, res);
});

router.post('/fees', async (req, res) => {
    let Singleuser = req.user;
    let Exists = await Student.find({ ID: Singleuser.id });
    var postuser = req.body;
    if (Exists.length > 0 && (Object.values(Exists[0].Fees)[0] != undefined)) {
        res.status(200).json({ message: "data is already exists" });
    }
    else if(!Object.values(Exists[0].Fees)[0] == undefined){
        const updatedoc = await  Student.findOneAndUpdate({ID:Singleuser.id},{Fees:req.body.Fees},{new:true});
        res.status(200).json({message: " Fees added successfully",Fees:updatedoc.Fees});
    }
    else  {
        try{
            new Student({
                "ID": Singleuser.id,
                "Name": Singleuser.username,
                "Address": Singleuser.password,
                "Fees": { "Amount": parseInt(postuser.Fees.Amount), "PaymentDate":postuser.Fees.PaymentDate , "Status": postuser.Fees.Status }
            }).save();
            res.status(200).json(postuser.Fees);
        }catch(err){
            res.status().json(err._message)
        }
    }
});


router.put('/fees',async(req,res)=>{
    let Singleuser = req.user;
    let Exists = await Student.find({ID:Singleuser.id});
    if (Exists.length > 0 && (Object.values(Exists[0].Fees)[0] != undefined)) {
      const updatedoc = await  Student.findOneAndUpdate({ID:Singleuser.id},{Fees:req.body.Fees},{new:true});
      res.status(200).json(updatedoc.Fees);
    } else {
        res.status('404').json({ message: 'you have no data to update' });
    }
});

router.delete('/fees',async(req,res)=>{
    let Singleuser = req.user;
    let Exists = await Student.find({ID:Singleuser.id});
    if (Exists.length > 0 && (Object.values(Exists[0].Fees)[0] != undefined)) {
      const updatedoc = await  Student.updateOne({ID:Singleuser.id},{$unset:{Fees:""}},{new:true});
      res.status(200).json({message:"deleteed successfully"});
    } else {
        res.status('404').json({ message: 'you have no data to delete' });
    }
});

router.post('/result',async(req,res)=>{
    let Singleuser = req.user;
    let Exists = await Student.find({ ID: Singleuser.id });
    var postuser = req.body;
    var Total = parseInt(postuser.Result.Hindi)+parseInt(postuser.Result.Eng)+parseInt(postuser.Result.Math);
    postuser.Result.Total = Total;
    if (Exists.length > 0 && (Object.values(Exists[0].Result)[0] != undefined)) {
        res.status(200).json({ message: "data is already exists" });
    }
    else if(Exists.length > 0  && (Object.values(Exists[0].Result)[0] == undefined)){
        const updatedoc = await  Student.findOneAndUpdate({ID:Singleuser.id},{Result:postuser.Result},{new:true});
        res.status(200).json({updated:updatedoc.Result});
    }
    else {
        try{
            new Student({
                "ID": Singleuser.id,
                "Name": Singleuser.username,
                "Address": Singleuser.password,
                "Result": {
                    "Hindi":parseInt(postuser.Result.Hindi),
                    "Eng": parseInt(postuser.Result.Eng),
                    "Math": parseInt(postuser.Result.Math),
                    "Total": Total,
                    "Grade": "A"
                }
            }).save();
            res.status(200).json(postuser.Fees);
        }catch(err){
            res.status().json(err._message)
        }
    }
});


router.put('/result',async(req,res)=>{
    let Singleuser = req.user;
    var postuser = req.body;
    var Total = parseInt(postuser.Result.Hindi)+parseInt(postuser.Result.Eng)+parseInt(postuser.Result.Math);
    postuser.Result.Total = Total;
    let Exists = await Student.find({ID:Singleuser.id});
    if (Exists.length > 0 && (Object.values(Exists[0].Result)[0] != undefined)) {
      const updatedoc = await  Student.findOneAndUpdate({ID:Singleuser.id},{Result:postuser.Result},{new:true});
      res.status(200).json({updated:updatedoc.Result});
    } else {
        res.status(404).json({ message: 'you have no data to update' });
    }
});

router.delete('/result',async(req,res)=>{
    let Singleuser = req.user;
    let Exists = await Student.find({ID:Singleuser.id});
    if (Exists.length > 0 && (Object.values(Exists[0].Result)[0] != undefined)) {
      const updatedoc = await  Student.updateOne({ID:Singleuser.id},{$unset:{Result:""}},{new:true});
      res.status(200).json({message:"deleteed successfully"});
    } else {
        res.status('404').json({ message: 'you have no data to delete' });
    }
});

async function Filterpath(req, res) {
    let Singleuser = req.user;
    let Exists = await Student.find({ ID: Singleuser.id });
    if (Exists.length > 0) {
        if (req.url === '/fees'  && (Object.values(Exists[0].Fees)[0] != undefined)) res.status(200).json(Exists[0].Fees);
        else if (req.url === '/result' && (Object.values(Exists[0].Result)[0] != undefined)) res.status(200).json(Exists[0].Result);
        else{res.status(404).json({message:"no data avilable"})}
    }
    else {
        res.status(404).json({ message: "Your Data is Not available" });
    }
}

module.exports = router;