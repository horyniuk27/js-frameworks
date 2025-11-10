"use strict";
function greet(name, times = 1) {
    for (let i = 0; i < times; i++)
        console.log(`Привіт, ${name}!`);
}
greet("Діма");
greet("Оля", 3);
