"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline-sync");
function calcIceCream() {
    const size = readline.question("Розмір (маленький/великий): ").toLowerCase();
    let price = size === "великий" ? 25 : 10;
    const toppings = readline.question("Начинки (шоколад, карамель, ягоди): ").split(",");
    for (let t of toppings) {
        switch (t.trim()) {
            case "шоколад":
                price += 5;
                break;
            case "карамель":
                price += 6;
                break;
            case "ягоди":
                price += 10;
                break;
        }
    }
    if (readline.question("Маршмелоу? (так/ні): ") === "так")
        price += 5;
    console.log(`Ціна: ${price} грн`);
}
calcIceCream();
//# sourceMappingURL=icecream.js.map