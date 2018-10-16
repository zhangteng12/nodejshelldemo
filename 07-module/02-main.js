#!/usr/bin/node

/*导出变量
var pi = require('./02-export-var.js');
console.log('\nPI:', pi);
console.log();
console.dir(module);
*/

/*导出函数*/
var circle=require('./02-export-function');
//var circle=require('./02-export-function.js');
console.log(circle(20).diameter());
console.log(circle(20).circumference());
console.log(circle(20).area());


/*导出对象
var circle=require('./02-export-object');
console.log(circle.diameter(20));
console.log(circle.circumference(20));
console.log(circle.area(20));
*/
