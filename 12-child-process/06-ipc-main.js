#!/usr/bin/node

const cp=require('child_process');

console.log('I am father process,PID:',process.pid);

var cmd=cp.fork('./06-ipc-child.js');

global.setTimeout(()=>{
  cmd.send('I am father,PID:'+process.pid);
},3000);

process.on('message',(msg)=>{
  console.log('CHILD-MSG',child.msg);
})
