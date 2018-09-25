#!/usr/bin/node

const pid=process.argv[2];
      sid=process.argv[3];

//check pid and sid

process.kill(pid,sid);
