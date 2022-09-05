var childProcess = require('child_process');
//多进程之间的通信 儿子进程用process注册事件  子进程是独立于主进程 通过ipc通信
var n = childProcess.fork('./son.js');
 
n.on('message', function(m) {
  console.log('Main Listen: ', m);
});
n.send({ hello: 'son' });