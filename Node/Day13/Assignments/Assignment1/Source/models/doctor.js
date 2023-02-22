const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    DoctorName: {type:String,required:true,unique:true},
    Age:{type:Number},
    Deptartment: [{ID:{type:mongoose.Schema.Types.ObjectId ,ref:'Deptartment',required:true}}]
});

const Doctor = mongoose.model('Doctor',doctorSchema);

module.exports = {Doctor};