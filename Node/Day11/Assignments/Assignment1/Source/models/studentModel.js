const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema(
    {
        ID: {type:mongoose.Schema.Types.ObjectId,ref:'User'},
        Name: {type:String,required:[true,'Name is required'],unique:true},
        Address: {type:String,required:[true,'Address is required']},
        Fees: {
            Amount: { type: Number},
            PaymentDate: { type: Date},
            Status: { type: String }
        },
        Result: {
            Hindi: { type: Number},
            Eng: { type: Number },
            Math: { type: Number},
            Total: { type: Number},
            Grade: { type: String }
        }
    }
);

const Student = mongoose.model("Student", StudentSchema);

module.exports = {Student};