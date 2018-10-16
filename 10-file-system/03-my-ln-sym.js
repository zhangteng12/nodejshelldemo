#!/usr/bin/node

const fs=require('fs');

var src=process.argv[2];  //源
    lnk=process.argv[3];  //链接名字

fs.symlinkSync(src,lnk);  //加sym前缀即可

