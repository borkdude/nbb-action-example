import { loadFile } from 'nbb';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import * as core from '@actions/core';
import * as github from '@actions/github';

const __dirname = dirname(fileURLToPath(import.meta.url));
const theFile = resolve(__dirname,'action.cljs');
const action = await loadFile(theFile);
action(core,github);
