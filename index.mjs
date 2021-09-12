import { loadFile } from 'nbb';
import { resolve } from 'path';

console.log(resolve('action.cljs'));
await loadFile('action.cljs');
