const dotenv=require('dotenv').config();
//   dotenv.config();

const { write } = require('fs');

const http = require('http');

// let serverPort = 3000;
let SERVER_PORT = process.env.SERVER_PORT;
// let hostName="127.0.0.1";
let HOST_IP = process.env.HOST_IP;

let myServer = http.createServer((request,response)=>{
    // response.writeHead(202,{'Content-Type':'text/plain'});
    // response.write("<h2>hello</h2>")
    // response.writeHead(202,{'Content-Type':'text/html'});
    // response.write("<h1>hello</h1>")
    // console.log(request.url)
    // response.end()
    if(request.url =="/"){
        response.write("Home Page...")
        response.end()
    }
    else if(request.url =="/about"){
        response.write("About Page...")
        response.end()
    }
    else if(request.url =="/blog"){
        response.write("Blog Page...")
        response.end()
    }else{
        response.write("Error 404....!")
        response.end()
    }
 
});

myServer.listen(SERVER_PORT,HOST_IP,()=>{
    console.log(`Server is Running...! http://${HOST_IP}:${SERVER_PORT}`)
})
