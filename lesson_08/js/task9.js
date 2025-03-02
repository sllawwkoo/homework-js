// Задача 9.
// Морський бій. Користувач вводить кількість клітинок одновимірного масиву та кількість одиночних кораблів.
// Комп’ютер довільно розміщує ці одиночні кораблі у масиві по один у клітинці
// (якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, що там є корабель.
// Користувач вводить номер клітинки, куди стріляє.
// Гра продовжується до тих пір, поки не будуть потоплені усі кораблі

if (confirm("Почати тестування?")) {
	function battleshipGame(size, shipCount) {
		const arr = new Array(size).fill(0);

		for (let i = 0; i < shipCount; ) {
			let randomIndex = Math.floor(Math.random() * size);
			if (arr[randomIndex] !== 1) {
				arr[randomIndex] = 1;
				i++;
			}
		}

		console.log("arr", arr);

		while (shipCount > 0) {
			let shot = parseInt(
				prompt(`Зробіть постріл, введіть номер клітинки від 0 до ${size - 1}!`)
			);

			if (isNaN(shot) || shot < 0 || shot >= size) {
				alert("Некоректне значення, спробуйте ще раз.");
				continue;
			}

			if (arr[shot] === 1) {
				alert("Влучили! 🚢 Потоплено!");
				arr[shot] = 0;
				shipCount--;
			} else {
				alert("Мимо! ❌");
			}

			console.log("newArr", arr);
			console.log("shipCount", shipCount);
		}

		alert("Всі кораблі потоплено! 🎉 Ви виграли!");
	}

	const cellNum = parseInt(prompt("Введіть кількість клітинок поля", "10"));
	const ships = parseInt(prompt("Введіть кількість одиночних кораблів", "5"));

	battleshipGame(cellNum, ships);
}
