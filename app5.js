const http =require('http');
const fs =require('fs');

const server = http.createServer((req,res)=>{
    if(req.url ==="/page1"){
        res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('page1.html').pipe(res)
    }else if(req.url==="/page2.html"){
        res.writeHead(200, { 'content-type': 'text/html' })
        fs.createReadStream('page2').pipe(res)
    }else if(req.url==="/page3") {
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream( '/error.html').pipe(res);
    }

}).listen(3000);

console.log("listening to port 3000");