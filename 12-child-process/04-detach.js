#!/usr/bin/node

const cp=require('child_process');

console.log('I am father process',process.pid);

cp.spawn('./02-child.js',[],{detached:true,stdin:['ignore',1,2]});

//cmd.stdout.pipe(process.stdout);

global.setTimeout(()=>{
  console.log('I am father,goodbye');
  process.exit();
},6000);
