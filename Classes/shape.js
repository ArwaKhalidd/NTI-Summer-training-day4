export class Shape {
    constructor(name) {
        if (this.constructor == Shape) {
            throw "invalied obj";
        }
        this.name = name;
    }

    area() {
        return 0;
    }

    perimeter() {
        return 0;
    }

    toString() {
        return `Shape: ${this.name}`;
    }
}

