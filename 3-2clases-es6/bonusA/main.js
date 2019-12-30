"use strict";

class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }

  perimeter() {
    return this.numberOfSides * this.base;
  }

  area() {
    return this.base * this.height;
  }
}

class Square extends Polygon {
  constructor(side) {
    super(4, side, side);
  }
}
class Triangle extends Polygon {
  constructor(base, height) {
    super(3, base, height);
  }
  area() {
    return super.area() / 2;
  }
}

const newSquare = new Square(4);
const newTriangle = new Triangle(4, 3);

console.log("Perímetro:", newSquare.perimeter());
console.log("Área", newSquare.area());

console.log("Área", newTriangle.area());
console.log("Perímetro:", newTriangle.perimeter());
