const fs =require('fs');
const { parse } = require('path');

function sum(arg1,arg2){
    fs.appendFile('Calc.txt',"Addition :" + arg1 +" + " + arg2 + " = " + (arg1 + arg2) + "\n",(err)=>{if(err) throw err;});
}
function sub(arg1,arg2){
    fs.appendFile('Calc.txt',"Subtraction :" + arg1 +" - " + arg2 + " = " + (arg1 - arg2) + "\n",(err)=>{if(err) throw err;});
}
function mul(arg1,arg2){
    fs.appendFile('Calc.txt',"Multiplication :" + arg1 +" * " + arg2 + " = " + (arg1 * arg2) + "\n",(err)=>{if(err) throw err;});
}
function div(arg1,arg2){
    fs.appendFile('Calc.txt',"divition :" + arg1 +" / " + arg2 + " = " + (arg1 / arg2) + "\n",(err)=>{if(err) throw err;});
}

var Myarray = (process.argv).slice(2);
var value1 =parseInt( Myarray[0]);
var value2 =parseInt( Myarray[2]);
var condition = Myarray[1];

switch(condition){
    case '+' :
    sum(value1,value2);
    fs.readFile('Calc.txt','utf8',(err,data)=>{console.log(data);});
    break;
    case '-' : 
    sub(value1,value2);
    fs.readFile('Calc.txt','utf8',(err,data)=>{console.log(data);});
    break;
    case '.' :
        mul(value1,value2);
        fs.readFile('Calc.txt','utf8',(err,data)=>{console.log(data);});
        break;
    case '/' :
        div(value1,value2);
        fs.readFile('Calc.txt','utf8',(err,data)=>{console.log(data);});
        break;
}