import { Before, Given, When, Then } from 'cucumber';
import Calculator from '../pages/calculator'
import { Hooks } from './Hooks';
let calculator;

Hooks().then((page) => {
    page.goto('https://triadproject.herokuapp.com');
});


Given('the numbers {int} and {int}', function (x, y) {
    calculator = new Calculator(x, y);
});

When('they are added together', function () {
    calculator.add();
});

Then('should the result be {int}', function (expected) {
    assert.equal(calculator.getResult(), expected)
});