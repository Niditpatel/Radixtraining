const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
    res.end(fs.readFileSync('person.json','utf-8'));
}).listen('3001');