const http = require('http');
const { parse } = require('querystring');
const url = require('url');
const fs = require('fs');

http.createServer((req,res)=>{;
    if(req.method === "POST" && url.parse(req.url,true).path.split('/')[1] === 'upload'){
        let body ='';
        req.on('data',chunk=>{
            body += chunk.toString();
        });
        req.on('end',()=>{
            fs.writeFileSync('person.txt',body);
            console.log(parse(body));
            res.end('ok');
        });
    }else{
        res.end("do data found");
    }
}).listen('3000');