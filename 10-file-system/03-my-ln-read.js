#!/usr/bin/node

const fs=require('fs');

var lnk=process.argv[2];  //符号链接名字

console.log(fs.readlinkSync(lnk));

