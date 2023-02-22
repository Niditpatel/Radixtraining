const express = require('express');
require('dotenv').config();


const app = express();
app.disable('x-powered-by');


app.use(express.json());

app.use('/',require('./auth'));
app.use('/admin',require('./admin'));
app.use('/dev',require('./dev'))

// let port = process.env.PORT || 5100;

app.listen(5100,()=>{console.log(`listing to the server...`)});
