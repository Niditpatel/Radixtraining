const  fs  = require("fs");


fs.appendFile('person.txt','Devakigalol,Jetpur,Rajkot,360370',(err)=>{if(err) throw err;console.log("Created Person.txt")});

fs.readFile('person.txt',"utf-8",(err,data)=>{if(err) throw err;var count = data.match(/(?![aeiou])[a-z]/gi, "").length; console.log(count);});

fs.unlink('person.txt',(err)=>{if(err) throw err;console.log("deleted SuccessFully")});
