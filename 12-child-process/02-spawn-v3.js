#!/usr/bin/node
//外部服务器版本
const http=require('http'),
      cp  =require('child_process');

http.createServer((req,res)=>{
  var cmd=cp.spawn('./02-child.js');
  cmd.stdout.pipe(res);
}).listen(8080);
