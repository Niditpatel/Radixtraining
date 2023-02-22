const router = require('express').Router();
const verifyToken = require('./verifytoken');

router.use(verifyToken);

let students = [
    {
        "ID": 1,
        "Name": "Reena",
        "Address": "Ahmedabad",
        "Fees": { "Amount": 10000, "PaymentDate": "12/12/2020", "Status": "true" },
        "Result": { "Hindi": 80, "Eng": 70, "Math": 60, "Total": 210, "Grade": "A" }
    },
    {
        "ID": 2,
        "Name": "Rita",
        "Address": "Surat",
        "Fees": { "Amount": 12000, "PaymentDate": "12 / 12 / 2020", "Status": "false" },
        "Result": { "Hindi": 80, "Eng": 70, "Math": 60, "Total": 210, "Grade": "A" }
    }
]
router.get('/:id/fees',verifyToken,(req, res, next) => {
    let exists = students.find((item)=>{if(item.ID == req.params.id)return item;})
    if(exists){
        res.json(exists.Fees);
    }
    else
    {
        res.status('404').json({
            message : "data not found"
        });
    }
});

module.exports =router;