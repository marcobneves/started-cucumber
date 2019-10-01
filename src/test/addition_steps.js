const assert = require('assert')
import { Before, Given, When, Then } from 'cucumber';
import Calculator from '../pages/calculator'

const puppeteer = require('puppeteer');
// import puppeteer from 'puppeteer';
(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: '/usr/bin/google-chrome'
    });
    const page = await browser.newPage();
    await page.goto('https://triadproject.herokuapp.com');
    // await browser.close();
})();


Before(() => {
});

let calculator;

Given('the numbers {int} and {int}', function (x, y) {
    calculator = new Calculator(x, y);
});

When('they are added together', function () {
    calculator.add();
});

Then('should the result be {int}', function (expected) {
    assert.equal(calculator.getResult(), expected)
});