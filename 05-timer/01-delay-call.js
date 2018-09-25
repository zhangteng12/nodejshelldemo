#!/usr/bin/node

function Bomb(){
  this.message='Bomb';
}

Bomb.prototype.explode=function(){
  console.log(this.message);
}

var b=new Bomb();

var timeID=global.setTimeout(b.explode.bind(b),2000);

global.clearTimeout(timeID);
