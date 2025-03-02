"use strict";

// Задача 4.
// Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
// •	починаються на букву «А»;
// •	перша і остання літери співпадають;
// •	складаються з більше ніш 5 символів;

const carNumbers = ["AA4536VC", "DC4F", "AB12C", "AA123BA", "CA12345", "DA12345CD", "BB1234CA"];

function getListCarsStartsWithA(carNumbers) {
	let count = 0;
	for (let i = 0; i < carNumbers.length; i++) {
		if (carNumbers[i].startsWith("A")) {
			count++;
		}
	}
	return count;
}

function getListCarsFirstAndLastLettersEqual(carNumbers) {
	let count = 0;
	for (let i = 0; i < carNumbers.length; i++) {
		if (carNumbers[i].charAt(0) === carNumbers[i].charAt(carNumbers[i].length - 1)) {
			count++;
		}
	}
	return count;
}

function getListCarsMoreThan5Symbols(carNumbers) {
	let count = 0;
	for (let i = 0; i < carNumbers.length; i++) {
		if (carNumbers[i].length > 5) {
			count++;
		}
	}
	return count;
}

document.write(`
<p>Кількість автомобілів, які починаються на букву «А»: ${getListCarsStartsWithA(carNumbers)}</p>
<p>Кількість автомобілів, у яких перша і остання літери співпадають: ${getListCarsFirstAndLastLettersEqual(carNumbers)}</p>
<p>Кількість автомобілів, які складаються з більше ніш 5 символів: ${getListCarsMoreThan5Symbols(carNumbers)}</p>
`);