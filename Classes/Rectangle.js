import { Square } from "./Square.js"; 


export class Rectangle extends Square {
  constructor(width, height) {
    super(width); 
    this.width = width;
    this.height = height;
    this.name = "Rectangle"; 
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  toString() {
    return `${super.toString().replace("Square", "Rectangle")}, Width: ${this.width}, Height: ${this.height}, Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
  }
}
