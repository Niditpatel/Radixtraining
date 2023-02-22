const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema({
    deptName: {type:String ,required:true,unique:true}
});

const Department = mongoose.model('Department',departmentSchema);

module.exports = {Department};