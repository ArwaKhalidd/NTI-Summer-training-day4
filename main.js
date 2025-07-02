import { Rectangle } from './classes/Rectangle.js';
import { Square } from './classes/Square.js';
import { Circle } from './classes/Circle.js';

const shapes = [
  new Rectangle(10, 5),
  new Square(7),
  new Circle(3)
];

shapes.forEach(shape => {
  console.log(shape.toString());
});
