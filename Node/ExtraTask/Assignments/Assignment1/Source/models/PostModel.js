const mongoose = require('mongoose');
const Joi = require('joi');

const PostSchema = new mongoose.Schema({
    PID: {type:Number ,required:true,unique:true},
    Image:{type:Blob},
    PostText:{type:String}

})