"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = exports.DVD = exports.Book = void 0;
// Клас Book реалізує LibraryItem
class Book {
    constructor(name, author, pages) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.borrowed = false; // стан позичання
    }
    borrow() {
        this.borrowed = true;
        console.log(`Книгу "${this.name}" взято`);
    }
}
exports.Book = Book;
// Клас DVD реалізує LibraryItem
class DVD {
    constructor(name, author, duration) {
        this.name = name;
        this.author = author;
        this.duration = duration;
        this.borrowed = false;
    }
    borrow() {
        this.borrowed = true;
        console.log(`DVD "${this.name}" взято`);
    }
}
exports.DVD = DVD;
// Клас Library для управління елементами
class Library {
    constructor() {
        this.items = [];
    }
    addItem(item) { this.items.push(item); } // додаємо елемент
    findItemByName(name) { return this.items.find(item => item.name === name); } // шукаємо за назвою
}
exports.Library = Library;
