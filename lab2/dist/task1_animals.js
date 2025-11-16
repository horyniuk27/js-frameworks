"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = exports.Bird = exports.Cat = void 0;
// Клас Cat реалізує інтерфейс Animal
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    } // конструктор приймає ім'я та опціональний вік
    move() {
        console.log(`${this.name} котик бігає по дому`); // вивід на консоль як котик рухається
    }
}
exports.Cat = Cat;
// Клас Bird реалізує інтерфейс Animal
class Bird {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move() {
        console.log(`${this.name} пташка літає в небі`); // вивід пересування пташки
    }
}
exports.Bird = Bird;
// Клас Fish реалізує інтерфейс Animal
class Fish {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move() {
        console.log(`${this.name} рибка плаває у воді`); // вивід пересування рибки
    }
}
exports.Fish = Fish;
