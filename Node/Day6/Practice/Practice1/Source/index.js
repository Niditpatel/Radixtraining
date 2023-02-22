const express = require('express');
const customer = require('./customers.json');
const app = express();
app.disable('x-powered-by');
app.use(express.json());

var server = app.listen('3000',()=>{
    console.log("Hello Nidit");
});
app.get('/',(req,res)=>{
    res.send("welcome to our Site");
});

app.get('/customers',(req,res)=>{
    res.send(customer);
});

