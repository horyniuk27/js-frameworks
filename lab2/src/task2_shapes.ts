// --- Завдання 2: Shape і класи фігур ---
// Інтерфейс Shape описує методи для площі, периметру та масштабування
export interface Shape {
    getArea(): number;         // метод для обчислення площі
    getPerimeter(): number;    // метод для обчислення периметру
    scale(factor: number): void; // метод масштабування фігури
}

// Клас Circle реалізує Shape
export class Circle implements Shape {
    constructor(public radius: number) {} // конструктор приймає радіус
    getArea() { return Math.PI * this.radius ** 2; } // площа круга
    getPerimeter() { return 2 * Math.PI * this.radius; } // периметр
    scale(factor: number) { this.radius *= factor; } // збільшуємо радіус пропорційно factor
}

// Клас Rectangle реалізує Shape
export class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}
    getArea() { return this.width * this.height; } // площа
    getPerimeter() { return 2 * (this.width + this.height); } // периметр
    scale(factor: number) { this.width *= factor; this.height *= factor; } // масштабування
}

// Клас Triangle реалізує Shape
export class Triangle implements Shape {
    constructor(public a: number, public b: number, public c: number) {}
    getArea() { // площа за формулою Герона
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
    getPerimeter() { return this.a + this.b + this.c; } // периметр
    scale(factor: number) { this.a *= factor; this.b *= factor; this.c *= factor; } // масштабування
}
