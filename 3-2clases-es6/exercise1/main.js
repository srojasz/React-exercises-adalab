"use strict";

class Square {
  perimeter(side) {
    return 4 * side;
  }

  area(side) {
    return side * side;
  }
}

const room = new Square();

console.log(room.perimeter(9));
console.log(room.area(9));
