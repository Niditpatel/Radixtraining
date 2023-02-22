const express = require('express');
const fs = require('fs');
const path = require('path')
const formidable = require('formidable');
const mongoose  = require('mongoose');



const app = express();
app.disable('x-powered-by')

const userschema = new mongoose.Schema({
    name: String,
    type:String,
    weight: Number
});
const user = mongoose.model('user',userschema);

mongoose.connect("mongodb://localhost/userdb").then(()=>{console.log("connected")});



app.listen(3006, function(err){
	if(err) console.log(err)
	console.log('Server listening on Port 3000');
});
