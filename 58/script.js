'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1984',
    showPublicData: function() {
        return console.log(`${this.name} ${this.surname}`);
    }
}
for (let key in user) {
    console.log(user[key]); // key - ключ
}

const arr = ['b', 'a', 'c'];

for (let key in arr) {
    console.log(arr[key]);
}
//более правильный способ перебора массива
for (let key of arr) {
    console.log(key); //key - значение
}

const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function() {
        console.log('Hello!!!');
    }
}
salaries[Symbol.iterator] = function() {
    return {
        current: this.john,
        last: this.ann,
        next() {
            if (this.current < this.last) {
                this.current = this.current + 500;
                return {done: false, value: this.current}
            } else {
                return {done: true}
            }
            // {done: true, value: 123}
        }
    }
}

for (let res of salaries) {
    console.log(res);
}