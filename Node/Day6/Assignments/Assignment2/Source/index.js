const express = require('express');
const students = require('./students.json');
const bodyParser = require('body-parser')

const app = express();
app.disable('x-powered-by');
app.use(express.json());
app.use(bodyParser.json());

const server = app.listen("8080",()=>{
    console.log("hello students");
});

app.get('/students',(req,res)=>{
    res.send(students);
});

app.get('/students/:id',(req,res)=>{
    let exists = students.find((item)=>{if(item.ID == req.params.id)return item;});
    if(exists){
        res.send(exists);
    }else{
    res.send(" data dose not exists ")
    }
});