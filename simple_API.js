//creating server;

const http=require('http');
 //here we are only sending response (we can get request by react,angular etc);
 const data=require('./data')
http.createServer((req,resp)=>{
     resp.writeHead(200,{'content-type':'application/json'}); //ading head and then response;
     resp.write(JSON.stringify(data));  //what is this 200: it just simly tell the status whter its giving error or file creeated or ok .
     resp.end();
}).listen(4500);