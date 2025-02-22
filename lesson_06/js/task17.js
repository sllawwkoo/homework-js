// Задача 17.
// Зобразити рівнобедрений трикутник із символів ^.
// Висоту задає користувач. Наприклад, на екрані висота =5.

if (confirm("Почати тестування?")) {
	let height = parseInt(prompt("Введіть висоту", "5"));

	const width = 2 * height - 1; // Загальна ширина трикутника

	// Цикл для рядків
	for (let row = 0; row < height; row++) {
		// Цикл для кожної позиції в рядку
		for (let col = 0; col < width; col++) {
			// Якщо позиція знаходиться в межах трикутника - виводимо ^, інакше виводимо пробіл
			if (col >= height - 1 - row && col <= height - 1 + row) {
				document.write(`<span>^</span>`);
			} else {
				document.write(`<span>&nbsp;</span>`);
			}
		}
		document.write("<br>");
	}
}
