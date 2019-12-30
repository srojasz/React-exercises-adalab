"use strict";

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

const helloPremium = users.map(function (user) {
  if (user.isPremium === true) {
    return `Bienvenida ${user.name}. Gracias por confiar en nosotros`
  } else {
    return `Bienvenida ${user.name}`
  }

});

console.log(helloPremium);
