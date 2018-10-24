#!/usr/bin/node

const cp=require('child_process');

console.log('I am father process',process.pid);

cp.spawn('node',['./02-child.js'],{detached:true,stdio:['ignore',1,2]});
//true的话父子进程可以分离

//cmd.stdout.pipe(process.stdout);

global.setTimeout(()=>{
  console.log('I am father,goodbye');
  process.exit();
},6000);
