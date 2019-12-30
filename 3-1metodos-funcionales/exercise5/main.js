"use strict";

const pins = [2389, 2384, 2837, 5232, 8998];

const evenNumbers = pins.filter(function (pin) {
  return pin % 2 === 0;

})

console.log(evenNumbers);