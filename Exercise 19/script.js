'use strict';
let array1 = [1, 2, 3, 4],
    array2 = [1, 2, [3, 4, [5], 6]],
    array3 = [5,3,1,[[],[]]],
    array4 = [{},{},{}];


// console.log(typeof(array));
let count = 0; 
function deepCount(a){     
    let count = 0;
    simpleCount(a);
    function simpleCount(elem) {
       elem.forEach(element => {
            if (typeof(element) !== 'object') {
                count++;
                
            } else {
                count++;
                simpleCount(element);
            }
        }); 
        return count;
    }
    return count; 
}
// console.log(deepCount(array1));
console.log(deepCount(array4));
// console.log(deepCount(array3));3
// console.log(deepCount(array4));
