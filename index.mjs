import { loadFile } from 'nbb';
import { resolve, dirname } from 'path';

import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const theFile = resolve(__dirname, 'action.cljs');
await loadFile(theFile);
