// Задача 10.
// Дано покази температур (довільна кількість).
// Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.

function getAveragePositiveTemperature() {
	let counter = 0;
	let averageValue = 0;

	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] > 0) {
			counter++;
			averageValue += arguments[i];
		}
	}

	return Math.round(averageValue / counter);
}

let result = getAveragePositiveTemperature(-1, 20, 22, -2, 15, -3, 10, -4, -5);

document.write(`
	<p>Дано покази темперитури: -1, 20, 22, -2, 15, -3, 10, -4, -5</p>
	<p>Середнє значення додатних показів температури: <strong>${result}</strong></p>`);
