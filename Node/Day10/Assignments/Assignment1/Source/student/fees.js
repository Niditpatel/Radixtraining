const router = require('express').Router();
const {Student} = require('../models/studentModel');
const { AuthorizationforStudent,TokenVerify } = require('../Authentication/verifyauth');

router.use(TokenVerify);
router.use(AuthorizationforStudent);

router.get('/fees', (req, res) => {
    Filterpath(req, res);
});

router.get('/result', (req, res) => {
    Filterpath(req, res);
});

async function Filterpath(req, res) {
    let Singleuser = req.user;
    let Exists = await Student.find({ID:Singleuser.id});
    console.log(Exists)
    if (Exists) {
        if (req.url === '/fees') res.status(200).json(Exists[0].Fees);
        else if (req.url === '/result') res.status(200).json(Exists[0].Result);
    }
    else {
        res.status(404).json({ message: "Your Data is Not available" });
    }
}

module.exports = router;