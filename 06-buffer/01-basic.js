#!/usr/bin/node

var buf1=new Buffer(256);
buf1[0]=23;

const log=console.log;
log('buffer1 length',buf1.length);
log('buffer1 content',buf1);
//循环初始化buf1
for(var i=0;i<256;i++){
  buf1[i]=i;
}
log('buffer1 content',buf1);
//对buf1切片，存到buf2
var buf2=buf1.slice(250,256);
log('buffer2 content',buf2);
//填充
buf2.fill(0);
log('buffer2 content',buf2);
//用数组初始化buffer
var arr=['a',0xBA,0xDF,0x00,0xBB,255,20];
var buf3=new Buffer(arr);
log('buffer3 content',buf3);
//用字符串初始化buffer
var buf4=new Buffer('hello world','utf8');
log('buffer4 content',buf4);
//buffer的复制
buf3.copy(buf4);//buf3复制到buf4中
log('buffer4 content',buf4);

  
