// 13.
//  Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M.
// Маючи К снарядів користувач намагається потопити корабель.

if (confirm("Почати тестування?")) {
	//Розмір поля
	const N = 5;
	const M = 5;

	//Кількість пострілів
	const K = 3;

	//Комп’ютер випадково розташовує одиночний корабель
	const compRowNum = 1 + Math.floor(Math.random() * N);
	const compColNum = 1 + Math.floor(Math.random() * M);

	// Поки не знищений
	let destroyed = false;

	for (let i = 1; i <= K; i++) {
		const userRowNum = parseInt(
			prompt(`Спроба№${i}.\n Введіть номер рядка пострілу`, "1")
		);
		const userColNum = parseInt(
			prompt(`Спроба№${i}.\n Введіть номер стовпця пострілу`, "1")
		);

		if (userRowNum === compRowNum && userColNum === compColNum) {
			// Знищення корабля
			destroyed = true;
			break;
		}
	}

	if (destroyed) {
		alert("Корабель знищено!");
		document.write(`
		<p>Корабель знищено!</p>
		<p>Координати корабля - рядок ${compRowNum}, стовпчик ${compColNum}</p>
		`);
	} else {
		alert("Поразка! \nКорабель не знищено!");
		document.write(`
		<p>Поразка! Корабель не знищено!</p>
		<p>Координати корабля - рядок ${compRowNum}, стовпчик ${compColNum}</p>
		`);
	}
}
