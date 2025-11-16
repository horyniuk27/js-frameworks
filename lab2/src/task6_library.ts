// --- Завдання 6: LibraryItem і класи Library ---
// Інтерфейс LibraryItem
export interface LibraryItem {
    name: string; // назва
    author: string; // автор
    borrow(): void; // метод для позичання
}

// Клас Book реалізує LibraryItem
export class Book implements LibraryItem {
    private borrowed = false; // стан позичання
    constructor(public name: string, public author: string, public pages: number) {}
    borrow() {
        this.borrowed = true;
        console.log(`Книгу "${this.name}" взято`);
    }
}

// Клас DVD реалізує LibraryItem
export class DVD implements LibraryItem {
    private borrowed = false;
    constructor(public name: string, public author: string, public duration: number) {}
    borrow() {
        this.borrowed = true;
        console.log(`DVD "${this.name}" взято`);
    }
}

// Клас Library для управління елементами
export class Library {
    private items: LibraryItem[] = [];
    addItem(item: LibraryItem) { this.items.push(item); } // додаємо елемент
    findItemByName(name: string) { return this.items.find(item => item.name === name); } // шукаємо за назвою
}
