const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    ID: {type:mongoose.Schema.Types.ObjectId,ref:'User'},
    Name: {type: String ,required:[true,'Name is Mandatory'],unique:true},
    Address: {type: String,required:[true,'address is require']},
    Assignment: {
        Assign_name: { type: String,required:[true,'Assignment Name is require'] },
        Status: { type: String,required:[true,'Status of Assignment is require'] }
    },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = {Employee};