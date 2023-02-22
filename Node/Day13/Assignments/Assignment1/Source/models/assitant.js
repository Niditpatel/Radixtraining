const mongoose = require('mongoose');

const assitantSchema = mongoose.Schema({
    AssistantName : {type:String ,required:true,unique:true},
    Department:[{ID:{type:mongoose.Schema.Types.ObjectId,ref:'Department',required:true}}]
});

const Assistant = mongoose.model('Assistant',assitantSchema);

module.exports = {Assistant};