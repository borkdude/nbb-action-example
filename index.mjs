import { loadFile } from 'nbb';
import { resolve, dirname } from 'path';

const __dirname = dirname(".");
const theFile = resolve(__dirname, 'action.cljs');
const { action } = await loadFile(theFile);
action();
