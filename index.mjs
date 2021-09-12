import { loadFile } from 'nbb';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(resolve('action.cljs'));
await loadFile('action.cljs');
