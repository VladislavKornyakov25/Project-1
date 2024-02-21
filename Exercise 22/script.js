'use strict'
const multiply20 = (price) => price * 20;    
const divide100 = (price) => price / 100;        
const normalizePrice = (price) => price.toFixed(2);
let a = 1;

let aa = function add1(a) {
    return a + 1;
};
let  bb = function addFirst(a) {
    return a;
};
    

const compose = (a,b) => (c) => {
    const functionsArray = [];
    functionsArray.push(a,b);    

    let result = functionsArray.reduceRight(function(previos, current) {
        return current(previos); 
    }, c);
    return result;   
};
console.log(compose(aa(a), bb(a)));