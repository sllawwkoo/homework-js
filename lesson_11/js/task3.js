"use strict";

// Задача 3.
// Морський бій.
// Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів.
// Користувач стріляє вказуючи координати.
// Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.

if (confirm("Почати тестування?")) {
	function battleshipGame(size, shipCount) {
		const arr = Array.from({ length: size }, () => Array(size).fill(0));

		for (let i = 0; i < shipCount; ) {
			let randomRowIndex = Math.floor(Math.random() * size);
			let randomColIndex = Math.floor(Math.random() * size);

			if (arr[randomRowIndex][randomColIndex] !== 1) {
				arr[randomRowIndex][randomColIndex] = 1;
				i++;
			}
		}

		console.table("arr");
		console.table(arr);

		while (shipCount > 0) {
			let shotRow = parseInt(
				prompt(`Зробіть постріл, введіть номер рядку від 1 до ${size}!`)
			);

			let shotCol = parseInt(
				prompt(`Зробіть постріл, введіть номер стовпчика від 1 до ${size}!`)
			);

			if (
				isNaN(shotRow) ||
				shotRow < 1 ||
				shotRow > size ||
				isNaN(shotCol) ||
				shotCol < 1 ||
				shotCol > size
			) {
				alert("Некоректне значення, спробуйте ще раз.");
				continue;
			}

			if (arr[shotRow - 1][shotCol - 1] === 1) {
				alert("Влучили! 🚢 Потоплено!");
				arr[shotRow - 1][shotCol - 1] = 0;
				shipCount--;
			} else {
				alert("Мимо! ❌");
			}

			console.log("newArr");
			console.table(arr);

			console.log("shipCount", shipCount);
		}

		alert("Всі кораблі потоплено! 🎉 Ви виграли!");
	}

	battleshipGame(6, 5);
}


