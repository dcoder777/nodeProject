const { Socket } = require('dgram');
const req = require('express/lib/request');
const res = require('express/lib/response');
const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hello World!!');
        res.end();
    }
});

server.listen(3000);
console.log("listing to port 3000....");
