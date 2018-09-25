#!/usr/bin/node

const log=console.log;
//打印CPU架构信息以及操作系统版本信息
log('architecture:',process.arch);
log('platform:%s\n',process.platform);
//打印进程id信息以及Node.js可执行文件的绝对路径信息
log('process id:',process.pid);
log('exePath:%s\n',process.execPath);
//打印Node.js版本信息，当前登录用户id信息，当前登录用户所属组id信息以及当前脚本所在路径信息
log('node version',process.version);
log('user id',process.getuid());
log('group id',process.getgid());
log('cwd:%s\n',process.cwd());
//在命令行执行'env'命令，验证程序输出的环境变量信息正确
log('env:',process.env);
log('host name',process.env.HOSTNAME);

