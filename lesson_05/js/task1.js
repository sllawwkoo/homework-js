// Задача 1.
// Вивести з використанням циклів маркований список з випадковими числами (1-100).
// Кількість випадкових чисел вводиться користувачем. Приклад:
// *12
// *21
// *34
// *51

// amountRenderNumbers - кількість випадкових чисел вводиться користувачем

if (confirm("Почати тестування?")) {
	const amountRenderNumbers = parseInt(
		prompt("Введіть кількість випадкових чисел", "4")
	);

	document.write(`<ul>`);

	for (let i = 0; i < amountRenderNumbers; i++) {
		const renderNumber = 1 + Math.floor(Math.random() * 100);

		document.write(`<li>${renderNumber}</li>`);
	}

	document.write(`</ul>`);
}

// if (confirm("Почати тестування?")) {

// }
