const http = require('http');
const url = require('url');
http.createServer((req,res)=>{
    var obj =url.parse(req.url,true).query;
    console.log(parseInt(obj.param1) + parseInt(obj.param2));
    res.end();
}).listen('3000');