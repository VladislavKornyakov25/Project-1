'use strict';

localStorage.setItem('number', '5');
console.log(localStorage.getItem('number'));

localStorage.clear();

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}
if (localStorage.getItem('bg') === 'changed') {    
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const person = {
    name: 'Alex',
    age: 25
};

const serializedPerson = JSON.stringify(person);
localStorage.setItem('alex', serializedPerson);

console.log(JSON.parse(localStorage.getItem('alex')));

// 96 REGULAR EXPRESION 

// new RegExp('pattern', 'flags');
// /patern/f

// const ans = prompt('Введите ваше имя');

// const reg = /n/;
// FLAGS
// i - поиск вне зависимости от регистра
// g - для поиска сразу нескольких значений
// m - многострочный поиск

// console.log(ans.search(reg));

// console.log(ans.match(reg));

const pass = prompt('password');

console.log(pass.replace(/./g, '*'));