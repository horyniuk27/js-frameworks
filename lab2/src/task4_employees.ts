// --- Завдання 4: Employee, Developer, Manager ---
// Абстрактний клас Employee – шаблон для співробітників
export abstract class Employee {
    constructor(public name: string, public age: number, public salary: number) {}
    abstract getAnnualBonus(): number; // абстрактний метод для річного бонусу
}

// Інтерфейс Payable – описує метод pay
export interface Payable { pay(): void; }

// Клас Developer наслідує Employee і імплементує Payable
export class Developer extends Employee implements Payable {
    getAnnualBonus(): number { return this.salary * 0.1; } // бонус 10% від зарплати
    pay() { console.log(`${this.name} отримав ${this.salary} зарплати`); } // метод pay
}

// Клас Manager наслідує Employee і імплементує Payable
export class Manager extends Employee implements Payable {
    getAnnualBonus(): number { return this.salary * 0.2; } // бонус 20% від зарплати
    pay() { console.log(`${this.name} отримав ${this.salary} зарплати`); }
}
