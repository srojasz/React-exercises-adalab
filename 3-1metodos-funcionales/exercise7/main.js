"use strict";

const times = [56, 9, 45, 28, 35];


const result = times.reduce((acc, time) => (acc + time) / times.length);

console.log(result);
