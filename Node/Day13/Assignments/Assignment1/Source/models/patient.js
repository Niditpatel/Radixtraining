const mongoose = require("mongoose");

const patiantSchema = new mongoose.Schema({
    PatientName: {type:String,required:true},
    Age: Number,
    Address: String,
    Department:[{ID:{type: mongoose.Schema.Types.ObjectId,ref:'Department',required:true}}],
    Doctor:[{ID:{type:mongoose.Schema.Types.ObjectId,ref:'Doctor',required:true}}],
    Drug:{
        Morning:[{ID:{type: mongoose.Schema.Types.ObjectId ,ref:'Drug'}}],
        Afternoon:[{ID:{type: mongoose.Schema.Types.ObjectId ,ref:'Drug'}}],
        Night:[{ID:{type: mongoose.Schema.Types.ObjectId ,ref:'Drug'}}]
    },
    Assistant:[{ID:{type: mongoose.Schema.Types.ObjectId ,ref:'Assistant',required:true}}]
});

const Patient = mongoose.model('Patient', patiantSchema);

module.exports = {Patient};