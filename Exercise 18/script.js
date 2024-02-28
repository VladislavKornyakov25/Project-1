'use strict';
function isPangram(string) {
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
}
console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('Hello world'));
