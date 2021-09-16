child = require('child_process');

console.log(process.version);
child.exec('which node', (err,stdout,sterr) => console.log(stdout));
child.exec('node --version', (err,stdout,sterr) => console.log(stdout));
child.exec('ls /', (err,stdout,sterr) => console.log(stdout));
