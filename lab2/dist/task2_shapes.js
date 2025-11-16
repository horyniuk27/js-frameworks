"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = exports.Rectangle = exports.Circle = void 0;
// Клас Circle реалізує Shape
class Circle {
    constructor(radius) {
        this.radius = radius;
    } // конструктор приймає радіус
    getArea() { return Math.PI * Math.pow(this.radius, 2); } // площа круга
    getPerimeter() { return 2 * Math.PI * this.radius; } // периметр
    scale(factor) { this.radius *= factor; } // збільшуємо радіус пропорційно factor
}
exports.Circle = Circle;
// Клас Rectangle реалізує Shape
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() { return this.width * this.height; } // площа
    getPerimeter() { return 2 * (this.width + this.height); } // периметр
    scale(factor) { this.width *= factor; this.height *= factor; } // масштабування
}
exports.Rectangle = Rectangle;
// Клас Triangle реалізує Shape
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getArea() {
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
    getPerimeter() { return this.a + this.b + this.c; } // периметр
    scale(factor) { this.a *= factor; this.b *= factor; this.c *= factor; } // масштабування
}
exports.Triangle = Triangle;
