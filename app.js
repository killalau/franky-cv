import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDom from 'react-dom';
import ReactDomServer from 'react-dom/server';

import App from './js/components/app.js';
import {index} from './template.js';
import reactState from './js/state.js';
import AppStore from './js/stores/app.js';

const processFile = (action, ...args) => {
    return new Promise((resolve, reject) => {
        let ckb = (err, data) => {
            if (err) reject(new Error(err))
            else resolve(data);
        };
        args.push(ckb);
        fs[action](...args);
    });
};
const readfile = (...args) => processFile('readFile', ...args);
const writeFile = (...args) => processFile('writeFile', ...args);

let reactStateStore = new AppStore(reactState);
let reactCmp = React.createElement(App, reactStateStore);
let reactHtml = ReactDomServer.renderToString(reactCmp);

let outpath = path.resolve(__dirname, 'index.htm');
writeFile(outpath, index(reactHtml, reactState));
