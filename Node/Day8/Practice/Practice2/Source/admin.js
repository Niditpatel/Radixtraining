const {AuthorizationforAdmin} =require('./verifyauth');
const database = require('./database');
const router = require('express').Router();

router.use(AuthorizationforAdmin);
router.get('/list',(req,res)=>{
res.status(200).send(database);
});

router.post('/add',(req,res)=>{
    let data = req.body;
    if(data){
        database.push(data)
        res.status(200).json(data);
    }else{
        res.status(404).send("no data to add");
    }
});

module.exports = router;