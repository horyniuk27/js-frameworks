function greet(name: string, times: number = 1): void {
    for (let i = 0; i < times; i++) console.log(`Привіт, ${name}!`);
}

greet("Діма");
greet("Оля", 3);
