// --- Завдання 1: Інтерфейс Animal і класи тварин ---
// Інтерфейс описує загальні властивості та метод пересування тварин
export interface Animal {
    name: string;   // ім'я тварини
    age?: number;   // вік (опціонально)
    move(): void;   // метод пересування
}

// Клас Cat реалізує інтерфейс Animal
export class Cat implements Animal {
    constructor(public name: string, public age?: number) {} // конструктор приймає ім'я та опціональний вік
    move() {
        console.log(`${this.name} котик бігає по дому`); // вивід на консоль як котик рухається
    }
}

// Клас Bird реалізує інтерфейс Animal
export class Bird implements Animal {
    constructor(public name: string, public age?: number) {}
    move() {
        console.log(`${this.name} пташка літає в небі`); // вивід пересування пташки
    }
}

// Клас Fish реалізує інтерфейс Animal
export class Fish implements Animal {
    constructor(public name: string, public age?: number) {}
    move() {
        console.log(`${this.name} рибка плаває у воді`); // вивід пересування рибки
    }
}
