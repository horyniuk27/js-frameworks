// --- Завдання 3: Абстрактний клас Car і похідні класи ---
// Абстрактний клас Car – шаблон для всіх машин
export abstract class Car {
    constructor(
        public brand: string,       // бренд (доступно всім)
        protected model: string,    // модель (доступно тільки в наслідниках)
        private year: number        // рік виробництва (доступно тільки в класі)
    ) {}
    abstract displayInfo(): void; // абстрактний метод для виводу інформації про авто
}

// Клас BMW наслідує Car
export class BMW extends Car {
    displayInfo() { console.log(`BMW ${this.model}, рік: ${this['year']}`); }
}

// Клас Audi наслідує Car
export class Audi extends Car {
    displayInfo() { console.log(`Audi ${this.model}, рік: ${this['year']}`); }
}

// Клас Tesla наслідує Car
export class Tesla extends Car {
    displayInfo() { console.log(`Tesla ${this.model}, рік: ${this['year']}`); }
}
