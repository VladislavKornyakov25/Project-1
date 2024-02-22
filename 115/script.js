'use strict';

setTimeout(() => console.log('timeout'));

Promise.resolve()
    .then(() => console.log('promise'));

console.log('run code');