'use strict'

class Rectangle {
    constructor(heigth, width) {
        this.heigth = heigth;
        this.width = width;
    }

    calcArea() {
        return this.heigth * this.width;
    }
}

class ColeredRectangleWithText extends Rectangle {
    constructor(heigth, width, text, bgColor) {
        super(heigth, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColeredRectangleWithText(25, 10, 'test text', 'red');
div.showMyProps();
console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(long.calcArea());

// console.log(square.calcArea());

