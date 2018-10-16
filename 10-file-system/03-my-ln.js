#!/usr/bin/node

const fs=require('fs');

var src=process.argv[2];//源文件
    lnk=process.argv[3];//链接文件名字
fs.linkSync(src,lnk);

