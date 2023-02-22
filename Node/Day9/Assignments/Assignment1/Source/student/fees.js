const router = require('express').Router();
const database = require('../database');
const { AuthorizationforStudent } = require('../Authentication/verifyauth');

router.use(AuthorizationforStudent);

router.get('/fees', (req, res) => {
    Filterpath(req, res);
});

router.get('/result', (req, res) => {
    Filterpath(req, res);
});

function Filterpath(req, res) {
    let Singleuser = req.user;
    let Exists = database.students.find((u) => (u.Name).toLowerCase().trim() === (Singleuser.username).toLowerCase().trim());
    if (Exists) {
        if (req.url === '/fees') res.status(200).json(Exists.Fees);
        else if (req.url === '/result') res.status(200).json(Exists.Result);
    }
    else {
        res.status(404).json({ message: "Your Data is Not available" });
    }
}

module.exports = router;