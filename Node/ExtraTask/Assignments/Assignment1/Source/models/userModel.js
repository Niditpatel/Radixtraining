const mongoose = require('mongoose');
const Joi = require('joi');


const UserSchema = new mongoose.Schema({
    ID: { type: Number, required: true, unique: true },
    UserName: { type: String, required: true },
    F_Name: { type: String, required: true },
    L_Name: { type: String, required: true },
    Password: { type: String, required: true },
    // Email: { type: String, unique: true, match: /.+\@.+\..+/ },
    ContactNo: { type: String, match: /[0-9]{10}/, unique: true },
    DOB: { type: Date, required: true }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

function ValidateUser(user) {
    const JoiSchema = Joi.object({
        ID: Joi.number(),
        UserName: Joi.string().required().pattern(/^[a-zA-Z0-9]{4,10}$/),
        F_Name: Joi.string().pattern(/^[a-zA-z]/).required(),
        L_Name: Joi.string().pattern(/^[a-zA-Z]/).required(),
        Password: Joi.string().required().min(4),
        Email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().external(async (value) => {
            const data = await User.findOne({ Email: value });
            if (data) throw Error('"Account" already exists');
            return value;
        }),
        ContactNo: Joi.string().length(10).pattern(/^[0-9]+$/).required().external(async (value, helpers) => {
            const data = await User.findOne({ ContactNo: value })
            if (data) throw Error("Account Already Exits");
            return value;
        }),
        DOB: Joi.date().required()
    });

    return JoiSchema.validateAsync(user);
}


function valiadteLoginUser(user){
    const Joischema  = Joi.object({
        UserName :Joi.string().required().pattern(/^[a-zA-Z0-9]{4,10}$/),
        Password: Joi.string().required()
    });
    return Joischema.validate(user);
}

module.exports = { User, ValidateUser,valiadteLoginUser };