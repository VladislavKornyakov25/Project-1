'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1984',
    showPublicData: function() {
        return console.log(`${this.name} ${this.surname}`);
    }
}

//МОДИФФИКАЦИЯ ФЛАГОВ
// Object.defineProperty(user, 'name', {writable: false});
// Object.defineProperty(user, 'gender', {value: 'male'});
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));
//writable
//enumerable
//configurable

Object.defineProperty(user, 'birthday', {value: prompt('When is your birthday?'), enumerable: true, configurable: true});
console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

Object.defineProperty(user, 'showPublicData', {enumerable: false});

for (let key in user) console.log(key);

Object.defineProperties(user, {
    name: {writable: true},
    surname: {writable: true}
});