import * as readline from "readline";

// інтерфейс для роботи з консоллю
const rl = readline.createInterface({
    input: process.stdin,   // Вхідні дані з консолі
    output: process.stdout  // Вивід даних у консоль
});

// Функція-обгортка для вводу з консолі, повертає проміс
function question(promptText: string): Promise<string> {
    return new Promise(resolve => {
        rl.question(promptText, answer => resolve(answer));
    });
}

// Основна асинхронна функція для розрахунку вартості морозива
async function calcIceCream() {
    // Питаємо розмір морозива та зберігаємо відповідь у нижньому регістрі
    const size = (await question("Size (small/large): ")).toLowerCase();

    // Встановлюємо початкову ціну в залежності від розміру
    let price = size === "large" ? 25 : 10;

    // Питаємо про топінги, розділені комами
    const toppingsInput = (await question("Toppings (chocolate, caramel, berries): ")).toLowerCase();
    const toppings = toppingsInput.split(","); // Перетворюємо рядок у масив

    // Додаємо вартість кожного топінгу до ціни
    for (let t of toppings) {
        switch (t.trim()) { // Обрізаємо пробіли навколо назви
            case "chocolate": price += 5; break;
            case "caramel": price += 6; break;
            case "berries": price += 10; break;
        }
    }

    // Питаємо, чи додати маршмеллоу
    const marshmallow = (await question("Add marshmallow? (yes/no): ")).toLowerCase();
    if (marshmallow === "yes") price += 5; // Додаємо до ціни, якщо користувач погодився

    // Виводимо фінальну ціну
    console.log(Buffer.from(`Price: ${price} UAH`, 'utf8').toString());

    rl.close(); // Закриваємо інтерфейс консолі
}

// Викликаємо головну функцію
calcIceCream();
