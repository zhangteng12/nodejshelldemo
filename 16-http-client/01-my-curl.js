#!/usr/bin/node

const http=require('http');
      url =require('url');

var address=process.argv[2] || 'http://sample.wangding.in/web/one/div.html';
address=global.encodeURL(address);

const options={
   hostname: url.parse(address).hostname,
   port: url.parse(address).port,
   path: url.parse(address).path,
   method:'POST',
   headers:{
     'User-Agent':'01-my-curl.js'
   }
};
  
http.request(address,(res)=>{
  console.log(`${res.httpVersion} ${res.statusCode} ${res.statusMessage}`)
  console.log(res.headers);//响应头
  console.log();

  res.pipe(process.stdout);
});


