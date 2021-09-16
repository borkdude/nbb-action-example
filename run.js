child = require('child_process');
child.exec('node dist/index.mjs', (err,stdout,sterr) => console.log(stdout));
