import { execSync } from 'child_process';

import { resolve, dirname } from 'path';

import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// const node_modules = resolve(__dirname, 'dist/node_modules.zip');

execSync(`ls -la`, {
  cwd: __dirname,
  stdio: 'inherit'});

execSync(`npm install`, {
  cwd: __dirname,
  stdio: 'inherit'});
