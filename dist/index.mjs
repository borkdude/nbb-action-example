import { loadFile } from 'nbb';
import { resolve, dirname } from 'path';
import { existsSync } from 'fs';

const __dirname = dirname(".");
const theFile = resolve(__dirname, 'action.cljs');
console.log(existsSync(theFile));

const { action } = await loadFile(theFile);
action();
