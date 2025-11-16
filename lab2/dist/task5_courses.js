"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseManager = exports.OnlineCourse = void 0;
// Клас OnlineCourse реалізує Course
class OnlineCourse {
    constructor(name, duration) {
        this.name = name;
        this.duration = duration;
        this.students = []; // масив студентів
    }
    // Додаємо студента на курс
    registerStudent(student) {
        if (!this.students.includes(student))
            this.students.push(student);
    }
    // Перевірка, чи студент зареєстрований
    isStudentRegistered(student) { return this.students.includes(student); }
}
exports.OnlineCourse = OnlineCourse;
// Клас CourseManager для управління курсами
class CourseManager {
    constructor() {
        this.courses = [];
    }
    addCourse(course) { this.courses.push(course); } // додаємо курс
    removeCourse(courseName) { this.courses = this.courses.filter(c => c.name !== courseName); } // видаляємо
    findCourse(courseName) { return this.courses.find(c => c.name === courseName); } // шукаємо
}
exports.CourseManager = CourseManager;
