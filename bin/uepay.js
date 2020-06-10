#!/usr/bin/env node
const establish = require('../runtime/establish');
(async ()=>{
    await establish();
    const next = require('next/dist/bin/next');
    if (next) {
        console.log('Start NextJs');
    }
})();
