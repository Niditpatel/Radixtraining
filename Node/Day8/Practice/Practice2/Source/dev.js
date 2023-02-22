const {AuthorizationforUser} =require('./verifyauth');
const database = require('./database');
const router = require('express').Router();

router.use(AuthorizationforUser);
router.get('/list',(req,res)=>{
res.status(200).send(database);
});

module.exports = router;