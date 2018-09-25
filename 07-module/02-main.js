#!/usr/bin/node

var pi = require('./02-export-var.js');

//console.log('\nPI:', pi);
//console.log();
//console.dir(module);


//导出函数
var circle=require('./02-export-function');
console.log('直径', circle.diameter(10));
console.log('周长', circle.circumference(10));
console.log('面积', circle.area(10));

//导出对象
var circle=require('./02-export-object');
console.log(circle(20).diameter(r));
console.log(circle(20).circumference(r));
console.log(circle(20).area(r));
