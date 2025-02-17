// Задача 16.
// Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів.
// Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.

if (confirm("Почати тестування?")) {
	const numberOfWeeks = parseInt(
		prompt(
			"Введіть кількість тижнів протягом яких потрібно знайти прибуток",
			"4"
		)
	);

	let weekProfit = 0;
	let totalProfit = 0;

	for (let week = 1; week <= numberOfWeeks; week++) {
		for (let day = 1; day <= 7; day++) {
			let dayProfit = parseInt(
				prompt(`Введіть прибуток за ${day} день ${week} тижня`, "5")
			);
			weekProfit += dayProfit;
		}

		document.write(`<p>Прибуток тижня №${week} - ${weekProfit} грн.</p>`);

		totalProfit += weekProfit;
		weekProfit = 0;
	}

	document.write(`
<p>Загальна величина прибутку протягом ${numberOfWeeks} тижнів - ${totalProfit} грн.</p>
`);
}
