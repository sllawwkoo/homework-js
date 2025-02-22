// Задача 10.
// Вивести на екран послідовність символів
// а о а о а о а о а о …
// Всього символів 82.

for (let i = 0; i < 82; i++) {
	if(i % 2 === 0) document.write(`<span>а</span>`);
	else document.write(`<span>о</span>`);
}
