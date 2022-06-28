import { execSync } from 'child_process';

import { resolve, dirname } from 'path';

import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const node_modules = resolve(__dirname, 'node_modules.zip');

import pkg from './package.json' assert {type: "json"};;

const version = pkg.version;

execSync(`curl -sLO https://github.com/borkdude/nbb-action-example/releases/download/v${version}/node_modules.zip`, {
  cwd: __dirname,
  stdio: 'inherit'});

execSync(`unzip -q ${node_modules}`, {
  cwd: __dirname,
  stdio: 'inherit'});
