const fs = require('fs');
const {readFile} = require('fs/promises');

fs.appendFile("person1.txt", "hello world", (err) => { if (err) throw err; console.log("created file 1") });
fs.appendFile("person2.txt", "hello india", (err) => { if (err) throw (err); console.log("created file 2") });


const Mytext = async()=>{
    const files = ['person1.txt','person2.txt'];
    for(const file of files){
        const Temp = await readFile(file,"utf8",(err)=>{throw err;});
        console.log(Temp);
    }
}
Mytext();