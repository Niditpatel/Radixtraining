const http = require('http');


// create server with http module 
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }
    if(req.url === '/api/cources'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
// server.on('connection',(soket)=>{console.log('new connection')})

server.listen('3000');

console.log('server is running on port 3000......');