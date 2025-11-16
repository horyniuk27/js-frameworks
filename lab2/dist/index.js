"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// --- Імпортуємо всі завдання ---
const task1_animals_1 = require("./task1_animals");
const task2_shapes_1 = require("./task2_shapes");
const task3_cars_1 = require("./task3_cars");
const task4_employees_1 = require("./task4_employees");
const task5_courses_1 = require("./task5_courses");
const task6_library_1 = require("./task6_library");
// --- Завдання 1 ---
console.log("--- Завдання 1: Тварини ---");
const cat = new task1_animals_1.Cat("Мурчик", 3);
const bird = new task1_animals_1.Bird("Синичка");
const fish = new task1_animals_1.Fish("Немо");
cat.move();
bird.move();
fish.move();
// --- Завдання 2 ---
console.log("\n--- Завдання 2: Фігури ---");
const shapes = [new task2_shapes_1.Circle(5), new task2_shapes_1.Rectangle(4, 6), new task2_shapes_1.Triangle(3, 4, 5)];
console.log(`Загальна площа: ${shapes.reduce((sum, s) => sum + s.getArea(), 0)}`);
console.log(`Загальний периметр: ${shapes.reduce((sum, s) => sum + s.getPerimeter(), 0)}`);
// --- Завдання 3 ---
console.log("\n--- Завдання 3: Автомобілі ---");
new task3_cars_1.BMW("BMW", "X5", 2020).displayInfo();
new task3_cars_1.Audi("Audi", "A6", 2019).displayInfo();
new task3_cars_1.Tesla("Tesla", "Model 3", 2021).displayInfo();
// --- Завдання 4 ---
console.log("\n--- Завдання 4: Співробітники ---");
const employees = [new task4_employees_1.Developer("Іван", 30, 50000), new task4_employees_1.Manager("Марія", 40, 80000)];
console.log(`Загальна сума бонусів: ${employees.reduce((sum, e) => sum + e.getAnnualBonus(), 0)}`);
// --- Завдання 5 ---
console.log("\n--- Завдання 5: Курси ---");
const cm = new task5_courses_1.CourseManager();
const tsCourse = new task5_courses_1.OnlineCourse("TypeScript", 20);
tsCourse.registerStudent("Діма");
cm.addCourse(tsCourse);
console.log(cm.findCourse("TypeScript"));
// --- Завдання 6 ---
console.log("\n--- Завдання 6: Бібліотека ---");
const library = new task6_library_1.Library();
library.addItem(new task6_library_1.Book("Гаррі Поттер", "Дж.К. Роулінг", 500));
library.addItem(new task6_library_1.DVD("Inception", "Нолан", 148));
(_a = library.findItemByName("Гаррі Поттер")) === null || _a === void 0 ? void 0 : _a.borrow();
