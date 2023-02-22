const http = require('http');
const url = require('url');
http.createServer((req,res)=>{
var MyName = url.parse(req.url,true).query.Name;
var opString = MyName.match(/[aeiou]/gi)[0] + " is the First Vovel Char in The String";
console.log(opString);
res.write(opString);
res.end();
}).listen('3000');