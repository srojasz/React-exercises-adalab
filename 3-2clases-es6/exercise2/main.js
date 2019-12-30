"use strict";

class Square {
  constructor(side) {
    this.side = side;
  }

  perimeter() {
    return 4 * this.side;
  }

  area() {
    return this.side * this.side;
  }
}

const room = new Square(1);
const bath = new Square(3);
const hall = new Square(7);

console.log("Perímetro:", room.perimeter());
console.log("Área:", room.area());
console.log("Perímetro:", bath.perimeter());
console.log("Área:", bath.area());
console.log("Perímetro:", hall.perimeter());
console.log("Área:", hall.area());
