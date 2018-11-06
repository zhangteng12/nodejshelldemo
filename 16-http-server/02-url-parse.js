#!/usr/bin/node

const http=require('http'),
      url=require('url'),
      log=console.log,
      qs=require('querystring');

var addr='http://wangding:123@www.baidu.com:8080/a/b/c?name=wangding&gender=M#/d/e/f';

log('url:',addr);
log('protocal:',url.parse(addr).protocol);
log('auth:',url.parse(addr).auth);

http.createServer((req,res)=>{
  log('url:',req.url);
  log('pathname:',url.parse(req.url).pathname);

  log('querystring:',url.parse(req.url).query);  

  log('qs parse',qs.parse(url.parse(req.url).query));

  res.end('OK!');
}).listen(8080);
