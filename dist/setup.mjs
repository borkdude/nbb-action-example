import { execSync } from 'child_process';

import { resolve, dirname } from 'path';

const __dirname = dirname(".");
const theFile = resolve(__dirname, 'node_modules.zip');

execSync(`ls -la ${__dirname}`, {stdio: 'inherit'});

execSync(`unzip -o node_modules.zip ${__dirname}`, {stdio: 'inherit'});
