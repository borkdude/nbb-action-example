import { execSync } from 'child_process';

execSync('ls -la', {stdio: 'inherit'});

execSync('unzip -o node_modules.zip', {stdio: 'inherit'});
