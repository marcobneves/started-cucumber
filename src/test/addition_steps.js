import { Before, Given, When, Then } from 'cucumber';
import Calculator from '../pages/calculator'
import { Hooks } from './Hooks';

let calculator;
let page;

Before(async () => {
    page = await Hooks();
});

Given('the numbers {int} and {int}', async (x, y)=> {
    calculator = new Calculator(x, y);
});

When('they are added together', function () {
    calculator.add();
});

Then('should the result be {int}', function (expected) {
    assert.equal(calculator.getResult(), expected)
});




