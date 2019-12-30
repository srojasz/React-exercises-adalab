"use strict";

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;


  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const Sara = new Person("Sara", "Rojas");
const Rafa = new Person("Rafa", "Tarazona");

console.log(Sara.fullName, Rafa.fullName);