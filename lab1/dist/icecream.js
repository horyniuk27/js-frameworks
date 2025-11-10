"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function question(promptText) {
    return new Promise(resolve => {
        rl.question(promptText, answer => resolve(answer));
    });
}
function calcIceCream() {
    return __awaiter(this, void 0, void 0, function* () {
        const size = (yield question("Size (small/large): ")).toLowerCase();
        let price = size === "large" ? 25 : 10;
        const toppingsInput = (yield question("Toppings (chocolate, caramel, berries): ")).toLowerCase();
        const toppings = toppingsInput.split(",");
        for (let t of toppings) {
            switch (t.trim()) {
                case "chocolate":
                    price += 5;
                    break;
                case "caramel":
                    price += 6;
                    break;
                case "berries":
                    price += 10;
                    break;
            }
        }
        const marshmallow = (yield question("Add marshmallow? (yes/no): ")).toLowerCase();
        if (marshmallow === "yes")
            price += 5;
        console.log(`Price: ${price} UAH`);
        rl.close();
    });
}
calcIceCream();
