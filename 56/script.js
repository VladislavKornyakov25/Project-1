'use strict';

// const obj = {
//     name: 'Vlad',
//     [Symbol('id')]: 1,
//     getId: function() {
//         return this[id];
//     }
// }

// // obj[id] = 1;

// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);
// for (let value in obj) console.log(value);

const myAwwesomeDB = {
    movies: [],
    actors: [],
    [Symbol('id')]: 123
}
//Стороннний код библиоотеки
myAwwesomeDB.id = '13224213';

console.log(myAwwesomeDB['id']);

console.log(myAwwesomeDB);