import { execSync } from 'child_process';

execSync('unzip -o node_modules.zip', {stdio: 'inherit'});
