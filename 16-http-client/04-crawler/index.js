#!/usr/bin/node

const http=require('http'),
   cheerio=require('cheerio'),
       log=console.log;

var addr='http://edu.51cto.com/courselist/index-zh5-p1.html';
  
http.get(addr,(res)=>{
  var html='';
  res.on('data',(data)=>{
    html+=data;
  });
  res.on('end',()=>{
    var $=cheerio.load(html);
    $('body').find('div.main').each(function(){
      var cName=$(this).find('a').text(),
          cTime=$(this).find('p.fl').text(),
        cTarget=$(this).find('div.course_target').text(),
        cURL=$(this).find('a').attr('href');

      if(cTime=='') return;

      log('课程名称',cName.trim());//trim更加整齐
      log('课程时长',cTime.trim());
      log('课程目标',cTarget.trim());
      log('课程地址',cURL.trim());
      log('');
    });
  });
});


