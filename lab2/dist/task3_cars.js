"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tesla = exports.Audi = exports.BMW = exports.Car = void 0;
// --- Завдання 3: Абстрактний клас Car і похідні класи ---
// Абстрактний клас Car – шаблон для всіх машин
class Car {
    constructor(brand, // бренд (доступно всім)
    model, // модель (доступно тільки в наслідниках)
    year // рік виробництва (доступно тільки в класі)
    ) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
exports.Car = Car;
// Клас BMW наслідує Car
class BMW extends Car {
    displayInfo() { console.log(`BMW ${this.model}, рік: ${this['year']}`); }
}
exports.BMW = BMW;
// Клас Audi наслідує Car
class Audi extends Car {
    displayInfo() { console.log(`Audi ${this.model}, рік: ${this['year']}`); }
}
exports.Audi = Audi;
// Клас Tesla наслідує Car
class Tesla extends Car {
    displayInfo() { console.log(`Tesla ${this.model}, рік: ${this['year']}`); }
}
exports.Tesla = Tesla;
