'use strict';

setTimeout(() => console.log('timeout'));

Promise.resolve()
    .then(() => console.log('promise'));

console.log('run code');


var countBits = function(n) {
    return console.log('--' + n.toString(2));// Program Me
};

console.log(countBits(2));