// --- Імпортуємо всі завдання ---
import { Cat, Bird, Fish } from "./task1_animals";
import { Circle, Rectangle, Triangle } from "./task2_shapes";
import { BMW, Audi, Tesla } from "./task3_cars";
import { Developer, Manager } from "./task4_employees";
import { OnlineCourse, CourseManager } from "./task5_courses";
import { Book, DVD, Library } from "./task6_library";

// --- Завдання 1 ---
console.log("--- Завдання 1: Тварини ---");
const cat = new Cat("Мурчик", 3);
const bird = new Bird("Синичка");
const fish = new Fish("Немо");
cat.move(); bird.move(); fish.move();

// --- Завдання 2 ---
console.log("\n--- Завдання 2: Фігури ---");
const shapes = [new Circle(5), new Rectangle(4,6), new Triangle(3,4,5)];
console.log(`Загальна площа: ${shapes.reduce((sum, s) => sum + s.getArea(),0)}`);
console.log(`Загальний периметр: ${shapes.reduce((sum, s) => sum + s.getPerimeter(),0)}`);

// --- Завдання 3 ---
console.log("\n--- Завдання 3: Автомобілі ---");
new BMW("BMW","X5",2020).displayInfo();
new Audi("Audi","A6",2019).displayInfo();
new Tesla("Tesla","Model 3",2021).displayInfo();

// --- Завдання 4 ---
console.log("\n--- Завдання 4: Співробітники ---");
const employees = [new Developer("Іван",30,50000), new Manager("Марія",40,80000)];
console.log(`Загальна сума бонусів: ${employees.reduce((sum, e)=>sum+e.getAnnualBonus(),0)}`);

// --- Завдання 5 ---
console.log("\n--- Завдання 5: Курси ---");
const cm = new CourseManager();
const tsCourse = new OnlineCourse("TypeScript",20);
tsCourse.registerStudent("Діма");
cm.addCourse(tsCourse);
console.log(cm.findCourse("TypeScript"));

// --- Завдання 6 ---
console.log("\n--- Завдання 6: Бібліотека ---");
const library = new Library();
library.addItem(new Book("Гаррі Поттер","Дж.К. Роулінг",500));
library.addItem(new DVD("Inception","Нолан",148));
library.findItemByName("Гаррі Поттер")?.borrow();
