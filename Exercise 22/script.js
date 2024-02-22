'use strict'
const multiply20 = (price) => price * 20;    
const divide100 = (price) => price / 100;        
const normalizePrice = (price) => price.toFixed(2);
    

const compose = (...fns) => (x) =>
    fns.reduceRight((res, fn) => fn(res), x);

const composeWithArgs = (...fns) => fns.reduceRight((f, g) => (...args) => g(f(...args)));
console.log(compose(aa(a), bb(a)));