#!/usr/bin/node

const name=process.argv[2];
      pwd=process.argv[3];

var str=name+':'+pwd;

var buf=new Buffer(str);
console.log('base64 str:',buf.toString('base64'));//告知编码是base64


