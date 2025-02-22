// 14.
// Вивести на екран усі трицифрові числа, 
// у яких перша цифра є більшою або рівною за суму другої і третьої.

// 126 = c1 - 1, c2 - 2, c3 - 6

for (let num = 100; num <= 999; num++) {
	let c3 = num % 10;
	let c2 = Math.floor(num / 10) % 10;
	let c1 = Math.floor(num / 100);
	if (c1 >= c2 + c3) {
		document.write(`<span>${num} </span>`);
	}
}