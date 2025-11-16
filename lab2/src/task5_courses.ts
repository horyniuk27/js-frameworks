// --- Завдання 5: Курси ---
// Інтерфейс Course описує структуру курсу
export interface Course {
    name: string;
    duration: number;
    students: string[];
}

// Клас OnlineCourse реалізує Course
export class OnlineCourse implements Course {
    students: string[] = []; // масив студентів
    constructor(public name: string, public duration: number) {}

    // Додаємо студента на курс
    registerStudent(student: string) {
        if (!this.students.includes(student)) this.students.push(student);
    }

    // Перевірка, чи студент зареєстрований
    isStudentRegistered(student: string): boolean { return this.students.includes(student); }
}

// Клас CourseManager для управління курсами
export class CourseManager {
    private courses: Course[] = [];
    addCourse(course: Course) { this.courses.push(course); } // додаємо курс
    removeCourse(courseName: string) { this.courses = this.courses.filter(c => c.name !== courseName); } // видаляємо
    findCourse(courseName: string): Course | undefined { return this.courses.find(c => c.name === courseName); } // шукаємо
}
