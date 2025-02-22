// Задача 16.
// З клавіатури вводяться числа до тих пір, поки послідовність є зростаючою або спадною.

if (confirm("Почати тестування?")) {
	let num = 0;
	let lastNum = 0;
	let check = true;

	while (check) {
		num = parseInt(prompt("Введіть число", "1"));
		document.write(`<span>${num} </span> <br>`);
		if (num > lastNum || num < lastNum) {
			lastNum = num;
		} else {
			check = false;
		}
	}
}
