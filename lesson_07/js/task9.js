// Задача 9.
// Дано покази температур (довільна кількість).
// Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.

function getCountNegativeTemperatures() {
	let counter = 0;

	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] < 0) counter++;
	}

	return counter;
}

let result = getCountNegativeTemperatures(-1, 20, 22, -2, 15, -3, 10, -4, -5);

document.write(`
	<p>Дано покази темперитури: -1, 20, 22, -2, 15, -3, 10, -4, -5</p>
	<p>Кількість від’ємних показів температури: <strong>${result}</strong></p>`);
