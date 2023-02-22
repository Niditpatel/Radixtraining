const router = require('express').Router();
const { Doctor } = require('../models/doctor');
const { verifyToken, AuthorizationforDoctor, AuthorizationforAdmin } = require('../Authentication/verifyauth');

router.use(verifyToken);
router.use(AuthorizationforAdmin);

// get all doctors 
router.get('/getAll', async (req, res) => {
    let Data = await Doctor.find({});
    if (Data.length > 0) {
        res.status(200).json(Data);
    } else {
        res.status(404).json({
            Message: "Data Not Available"
        });
    }
});

// get perticular doctor 
router.get('/get/:name', async (req, res) => {
    const Name = req.params.name;
    let Data = await Doctor.findOne({ DoctorName: Name });
    if (Data) {
        res.status(200).json(Data);
    } else {
        res.status(404).json({
            Message: "Data Not Found"
        });
    }
});

// create doctor 
router.post('/add', async (req, res) => {
    const PostUser = req.body;
    // check for doctor Exists or not 
    const Exists = await Doctor.findOne({ DoctorName: PostUser.DoctorName });
    if (Exists) {
        res.status(404).json({
            message: "doctor already exist"
        })
    } else {
        // if not then create doctor 
        try {
            const doctor = await new Doctor({
                DoctorName: PostUser.DoctorName,
                Age: PostUser.Age,
                Deptartment: PostUser.Deptartment
            }).save();
            res.status(200).json({
                message: " user added successfully",
                Doctor: doctor
            });
        } catch (e) {
            res.send(e._message);
        }

    }
});


// update doctor 
router.put('/update', async (req, res) => {
    const postUser = req.body;
    const Exists = await Doctor.findOne({ DoctorName: req.body.DoctorName });
    console.log(Exists);
    if (!Exists) {
        res.status(404).json({
            message: " user not exist which you want to update"
        })
    } else {
        try {
            if (postUser.Age) Exists.Age = postUser.Age;
            if (postUser.Deptartment) Exists.Deptartment = postUser.Deptartment;
            Exists.save();
            res.status(200).json({
                message: " updated successfully..",
                Data: Exists
            })
        } catch (e) {
            res.status(400).json({
                message: e._message
            })
        }
    }
})


// delete doctor 
router.delete('/delete/:name', async (req, res) => {
    const Name = req.params.name;
    const Exists = await Doctor.findOne({ DoctorName: Name });
    if (!Exists) {
        res.status(404).json({
            message: "Doctor not exist in data that you want delete"
        })
    } else {
        try {
            Exists.remove();
            res.status(200).json({
                message: "deleted successfully"
            });
        } catch (e) {
            res.json({
                message: e._message
            })
        }
    }
});


module.exports = router;