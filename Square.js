import { Shape } from './shape.js';

export class Square extends Shape {
  constructor(side) {
    super("Square");
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }

  perimeter() {
    return 4 * this.side;
  }

  toString() {
    return `${super.toString()}, Side: ${this.side}, Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
  }
}
