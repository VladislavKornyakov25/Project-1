'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block)

// block?.textContent = '123';

const userData = {
    name: 'Vlad',
    age: null
}

// if (userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js);
// }
console.log(userData.skills?.js);