"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = exports.Developer = exports.Employee = void 0;
// --- Завдання 4: Employee, Developer, Manager ---
// Абстрактний клас Employee – шаблон для співробітників
class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
exports.Employee = Employee;
// Клас Developer наслідує Employee і імплементує Payable
class Developer extends Employee {
    getAnnualBonus() { return this.salary * 0.1; } // бонус 10% від зарплати
    pay() { console.log(`${this.name} отримав ${this.salary} зарплати`); } // метод pay
}
exports.Developer = Developer;
// Клас Manager наслідує Employee і імплементує Payable
class Manager extends Employee {
    getAnnualBonus() { return this.salary * 0.2; } // бонус 20% від зарплати
    pay() { console.log(`${this.name} отримав ${this.salary} зарплати`); }
}
exports.Manager = Manager;
