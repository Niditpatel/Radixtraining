const express = require('express');
const mongoose = require('mongoose');
const {User} = require('./models/userModel')

const app = express();
app.disable('x-powered-by');
app.use(express.json());
app.use('/',require('./Authentication/auth'));

mongoose.connect("mongodb://localhost/Twitter").then(()=>console.log("Connected to the database"));

app.listen(3200,()=>console.log('server listing to the port'));