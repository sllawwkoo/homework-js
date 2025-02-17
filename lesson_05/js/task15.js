// Задача 15.
// Користувача поступово вводить показники температури протягом року. Знайти середню температуру.

if (confirm("Почати тестування?")) {
	let averageTempPerYear; // середня температура за рік
	let averageTempPerMonth = 0; // загальна температура за рік

	for (let i = 1; i <= 12; i++) {
		averageTempPerMonth += parseFloat(
			prompt(`Введіть температуру за ${i} місяць`)
		);
	}

	averageTempPerYear = averageTempPerMonth / 12;

	document.write(`
<p>Середня температура за рік - ${averageTempPerYear.toFixed(2)} градусів</p>
`);
}
