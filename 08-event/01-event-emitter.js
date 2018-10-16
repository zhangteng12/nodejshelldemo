#!/usr/bin/node

const EventEmitter=require('events').EventEmitter;//引用模块

var emitter=new EventEmitter();

emitter.on('hello',()=>{
  console.log('hello event');
});

emitter.on('hello',()=>{
  console.log('HELLO EVENT');
});

console.log(emitter.listeners('hello'));

emitter.on('bye',()=>{
  console.log('bye event');
  process.exit();
});

global.setInterval(()=>{
  emitter.emit('hello');
},500);

global.setTimeout(()=>{
  emitter.emit('bye');
},3000);
