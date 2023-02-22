const express = require('express');
const verifytoken = require('./verifytoken');

const router = express.Router();


router.get('/data',verifytoken,(req,res,next)=>{
    let customersdata =[
        {
            id:1,
            customername :"nidit"
        },
        {
            id:2,
            customername:"hemal"
        },
        {
            id:3,
            customername:"ruchit"
        },
        {
            id:4,
            customername:"vidhi"
        }
    ];
    res.json(customersdata);
});

module.exports = router;