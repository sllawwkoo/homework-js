// Задача 1. З клавіатури вводяться імена двох дітей та кількість у них цукерок.
// Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.

// Крок 0. Позначення величин
// firstChildName - ім'я першої дитини
// secondChildName - ім'я другої дитини
// firstChildSweets - кількість цукерок у першої дитини
// secondChildSweets - кількість цукерок у другої дитини

if (confirm("Почати тестування?")) {
	// Крок 1. Введення необхідних даних
	const firstChildName = prompt("Введіть ім'я першої дитини", "Ivan");
	const secondChildName = prompt("Введіть ім'я другої дитини", "Olya");
	const firstChildSweets = parseInt(
		prompt("Введіть кількість цукерок у першої дитини", "5")
	);
	const secondChildSweets = parseInt(
		prompt("Введіть кількість цукерок у другої дитини", "7")
	);

	// Крок 2.Обчислення та Виведення результатів
	if (firstChildSweets > secondChildSweets) {
		document.write(`
	<p>У <strong>${firstChildName}</strong> на ${
			firstChildSweets - secondChildSweets
		} цукерок більше, ніж у <strong>${secondChildName}</strong>.</p>	
	`);
	} else if (firstChildSweets < secondChildSweets) {
		document.write(`
	<p>У <strong>${secondChildName}</strong> на ${
			secondChildSweets - firstChildSweets
		} цукерок більше, ніж у <strong>${firstChildName}</strong>.</p>
	`);
	} else {
		document.write(`
			<p>У <strong>${firstChildName}</strong> та <strong>${secondChildName}</strong> одинакова кількість цукерок - по <strong>${firstChildSweets}</strong> штук.</p>
	`);
	}
}
