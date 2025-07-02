import { Shape } from './shape.js';

export class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }

  toString() {
    return `${super.toString()}, Radius: ${this.radius}, Area: ${this.area().toFixed(2)}, Perimeter: ${this.perimeter().toFixed(2)}`;
  }
}
