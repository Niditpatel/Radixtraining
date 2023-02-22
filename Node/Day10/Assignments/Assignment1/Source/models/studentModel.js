const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema(
    {
        ID: {type:mongoose.Schema.Types.ObjectId,ref:'User'},
        Name: {type:String,required:[true,'Name is required'],unique:true},
        Address: {type:String,required:[true,'Address is required']},
        Fees: {
            Amount: { type: Number,required:true },
            PaymentDate: { type: Date,required:true },
            Status: { type: String,required: true }
        },
        Result: {
            Hindi: { type: Number,required:true },
            Eng: { type: Number,required:true },
            Math: { type: Number,required:true },
            Total: { type: Number,required:true },
            Grade: { type: String,required:true }
        }
    }
);

const Student = mongoose.model("Student", StudentSchema);

module.exports = {Student};