import { execSync } from 'child_process';

import { resolve, dirname } from 'path';

import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const theFile = resolve(__dirname, 'node_modules.zip');

execSync(`ls -la ${__dirname}`, {stdio: 'inherit'});

execSync(`unzip -o node_modules.zip -d ${__dirname}`, {stdio: 'inherit'});
