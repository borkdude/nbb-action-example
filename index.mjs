import { loadFile } from 'nbb';
const { action } = await loadFile('action.cljs');
action();
