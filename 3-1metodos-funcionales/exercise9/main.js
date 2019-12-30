"use strict";

const runners = [
  { name: 'Gregory Goyle', time: 56, student: true },
  { name: 'Nymphadora Tonks', time: 9, student: false },
  { name: 'Luna Lovegood', time: 45, student: true },
  { name: 'Cedric Diggory', time: 28, student: true },
  { name: 'Cho Chang', time: 35, student: true },
];

const runnersStudents = runners.filter(function (runner) {
  return runner.student === true
});


const winner = runnersStudents.reduce(function (acc, user) {
  if (acc === null || user.time < acc.time) {
    acc = user;
  }
  return acc;
});

console.log(winner);