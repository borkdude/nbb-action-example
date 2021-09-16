child = require('child_process');

child.fork('dist/index.mjs', [], {execPath: "node"});
