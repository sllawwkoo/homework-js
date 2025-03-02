// Задача 2.
// Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// ●	номери днів, протягом яких кількість відвідувачів була меншою за 20;
// ●	номери днів, коли кількість відвідувачів була максимальною;
// ●	номери днів, коли кількість відвідувачів була мінімальною;
// ●	загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.

const weeklyVisitors = [15, 50, 18, 11, 86, 170, 150];

function getDaysNumbersListLess20(arr) {
	let daysNumbers = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 20) daysNumbers.push(i + 1);
	}

	return daysNumbers;
}

function getDaysNumbersListMax(arr) {
	let daysNumbers = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === Math.max(...arr)) daysNumbers.push(i + 1);
	}

	return daysNumbers;
}

function getDaysNumbersListMin(arr) {
	let daysNumbers = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === Math.min(...arr)) daysNumbers.push(i + 1);
	}

	return daysNumbers;
}

function getTotalClients(arr, startIndex, endIndex, step = 1) {
	let sum = 0;

	for (let i = startIndex - 1; i < endIndex; i += step) {
		sum += arr[i];
	}

	return sum;
}

document.write(`
<p>Номери днів, протягом яких кількість відвідувачів була меншою за 20: ${getDaysNumbersListLess20(
	weeklyVisitors
)}</p>
<p>Номери днів, коли кількість відвідувачів була максимальною: ${getDaysNumbersListMax(
	weeklyVisitors
)}</p>
<p>Номери днів, коли кількість відвідувачів була мінімальною: ${getDaysNumbersListMin(
	weeklyVisitors
)}</p>
<p>Загальну кількість клієнтів у робочі дні: ${getTotalClients(
	weeklyVisitors,
	1,
	5
)}</p>
<p>Загальну кількість клієнтів у вихідні дні: ${getTotalClients(
	weeklyVisitors,
	6,
	7
)}</p>
`);
