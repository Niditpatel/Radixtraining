const mongoose = require('mongoose');
const Joi = require('joi');

const userSchemma = mongoose.Schema({
    name: {type: String,required: [true,'username is required'],unique: true},
    password: { type: String,required: [true,'password is required']},
    role:{type: String,
    enum:{values:['doctor','assistant','admin'],
    message:`{value} is not valid`}}
});


function validateUser(user){
    const UserValSchema = Joi.object({
        name : Joi.string().min(3).max(20).required().external(async(value,helpers)=>{
              const  data = await  User.findOne({name:value});
            if(data){
               throw Error(('"username" must be Unique'));
            }else{
                return value;
            }
        }),
        password: Joi.string().required(),
        role : Joi.string().valid('doctor','assistant','admin').required()
    }).options({abortEarly: false});

    return UserValSchema.validateAsync(user);
}


function validateuserlogin(){
    const joischema = Joi.object({
        username : Joi.string(),
        password: Joi.string()
    })
    return joischema.validate()
}

const User = mongoose.model('User',userSchemma);

module.exports = {User,validateUser};

// async function abc(value){
//     const data =  await User.findOne({name:value});
//     return data;
//  }