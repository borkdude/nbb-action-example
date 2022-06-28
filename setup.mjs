import { execSync } from 'child_process';

import { resolve, dirname } from 'path';

import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const node_modules = resolve(__dirname, 'node_modules.zip');

execSync(`curl -sLO https://github.com/borkdude/nbb-action-example/releases/download/v0.1.0/node_modules.zip`, {
  cwd: __dirname,
  stdio: 'inherit'});

execSync(`unzip ${node_modules}`, {
  cwd: __dirname,
  stdio: 'inherit'});
