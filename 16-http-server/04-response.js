#!/usr/bin/node

const http=require('http');

http.createServer((req,res)=>{
  if(req.url == '/'){
    var html=''
      +  '<!DOCTYPE html>'
      +  '<html lang="en">'
      +  '<head>' 
      +  '<meta charset='utf-8'/>' 
      +  '<title>Hello</title>' 
      +  '</head>' 
      +  '<body>' 
      +  '<h1>HELLO WORLD!</h1>'
      +  '</body>' 
      +  '</html>' 
  
  //res.statusCode=200;
  //res.setHeader('Content-Type','text/html');
  res.writeHead(200,{
    'Content-Type':'text/html',
    'Content-length':buffer.bytelength(html)
  });
  res.end(html);
  }else{
    res.statusCode=404;
    res.end('Resource not found');
  }
}).listen(8080);
