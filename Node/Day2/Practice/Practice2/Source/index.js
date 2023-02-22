const fs = require('fs');

var name = (process.argv).slice(2)[0];

 fs.appendFile('person.txt',"hello" + " " + name + "\n",(err)=>{if(err) throw err; console.log("Updated Successfully")});

