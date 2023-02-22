const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {type:String,required:[true,'Username is required'],unique:true},
    password: {type:String,required:[true,'password is  required'],unique:true},
    Role: { type: String,enum:{
        values: ['student', 'employee'],
        message: `{VALUE} is not supported`
      } }
});

const User = mongoose.model("User", userSchema);

module.exports = {User};