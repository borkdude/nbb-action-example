import { execSync } from 'child_process';
import { resolve, dirname } from 'path';
import { readFileSync } from 'fs';

import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const node_modules = resolve(__dirname, 'node_modules.zip');
const pkg = JSON.parse(readFileSync(resolve(__dirname, 'package.json')).toString());
const version = pkg.version;

console.log(version);

execSync(`curl -sLO https://github.com/borkdude/nbb-action-example/releases/download/v${version}/node_modules.zip`, {
  cwd: __dirname,
  stdio: 'inherit'});

execSync(`unzip -o -q ${node_modules}`, {
  cwd: __dirname,
  stdio: 'inherit'});
