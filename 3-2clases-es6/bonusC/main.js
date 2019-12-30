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
  get side() {
    return super.base;

  }

  set side(newSide) {
    super.base = newSide;
    super.height = newSide;
  }


}

const newSquare = new Square(7);

const newSquareArea = newSquare.area();

console.log(`Si el lado del cuadrado mide 7: ${newSquareArea}`);

newSquare.side = 47;

const newSquareArea2 = newSquare.area();

console.log(`Si el lado mide 47: ${newSquareArea2}`);
