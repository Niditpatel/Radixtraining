const router = require('express').Router();
const { Patient } = require('../models/patient');
const { Doctor } = require('../models/doctor')
const { verifyToken, AuthorizationforAssistant } = require('../Authentication/verifyauth');


router.use(verifyToken);
router.use(AuthorizationforAssistant);


// find patients treated by perticular doctor 
router.get('/patient/:doctor', async (req, res) => {
    const getdoctor = req.params.doctor;
    if (getdoctor) {
        const doctor = await Doctor.findOne({ DoctorName: getdoctor }).select('DoctorName Age');
        if (!doctor) {
            res.status(404).json({
                message: "doctor doesn't found"
            });
        } else {
            const patients = await Patient.find({ "Doctor.ID": doctor._id })
            .populate({ path: 'Doctor.ID', select: '-_id DoctorName Age', strictPopulate: false })
            .select('PatientName Age -_id');
            if(patients.length > 0 ){
            res.json({ doctor, patients });
            }else{
                res.status(404).json({
                    message:"no patients is treated by this doc"
                })
            }
        }
    } else {
        res.status(400).json({ message: "write doctor name first" });
    }
});


// find the report medicine list of perticular patient 
router.get('/:patient/medicine',async(req,res)=>{
    const patient = req.params.patient;
    if(!patient){
        res.status(404).json({
            message: "give patient name"
        })
    }else{
        const Availpatient = await Patient.findOne({PatientName:patient});
        if(!Availpatient){
            res.status(404).json({
            message:"patient not found"
            });
        }else{
           const medicinereport = await Patient.find({PatientName:patient})
           .populate('Drug.Morning.ID Drug.Afternoon.ID Drug.Night.ID','DrugName power -_id')
           .select('PatientName -_id Age');
           res.status(200).json(medicinereport);
        }
    }
});

// summary report
router.get('/summary',async(req,res)=>{
    const summary = await Patient.find({}).select('-_id -__v')
    .populate('Doctor.ID Department.ID Drug.Morning.ID Drug.Afternoon.ID Drug.Night.ID','DoctorName deptName  DrugName power -_id')
    .populate({path:'Assistant.ID',select:'-_id -__v',populate:{path:"Department.ID",select:'-_id -__v'},strictPopulate:false});
    if(summary.length > 0){
    res.status(200).json(summary);
    }else{
        res.status(404).json({
            message: "no data found"
        })
    }
})
module.exports = router;

