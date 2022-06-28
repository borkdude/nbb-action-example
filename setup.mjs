import { execSync } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

execSync(`npm install`, {
  cwd: __dirname,
  stdio: 'inherit'});
