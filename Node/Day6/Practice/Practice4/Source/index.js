const express = require('express');
const customer = require('./customers.json');
const bodyParser = require('body-parser');
const app = express();
app.disable('x-powered-by');

app.use(express.json());
app.use(bodyParser.json());

var server = app.listen('3002',()=>{
    console.log("Hello Nidit");
});
app.get('/',(req,res)=>{
    res.send("welcome to our Site");
});

app.get('/customers',(req,res)=>{
    res.send(customer);
});
app.get('/customers/:id',(req,res)=>{
    const singleCustomer = customer.find((item)=>{
       if( item.id == req.params.id){
        return item;
       }
    });
    res.send(singleCustomer);
});
app.post('/customer',(req,res)=>{
    customer.push(req.body);
    res.send("data added successfully");
});

app.patch('/customer/:id',(req,res)=>{
    customer.find((item)=>{
        if(item.id == req.params.id){
            item.Name = req.body.Name;
            return item;
        }
    })
    res.send("updated successfully");
});
