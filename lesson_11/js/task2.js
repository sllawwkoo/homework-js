// Задача 2.
// Дано інформацію про прибуток К магазинів протягом тижня. Знайти :

const profits = [
	[20, 150, 40, 50, 100, 250, 20], // магазин 1
	[50, 40, 450, 300, 200, 95, 70], // магазин 2
	[35, 100, 150, 45, 400, 55, 50], // магазин 3
	[15, 20, 500, 300, 250, 70, 40], // магазин 4
];
console.log("profits", profits);

document.write(
	`<p><strong>Дано масив</strong>:<br> ${JSON.stringify(profits)}</p>`
);

// 1) загальний прибуток кожного масиву за тиждень;
document.write(
	`<p><strong>1. Загальний прибуток кожного масиву за тиждень</strong>:</p>`
);

profits.forEach((profit, index) => {
	const weeklyProfit = profit.reduce((sum, value) => sum + value);

	document.write(`
	<p>Загальний прибуток магазину№${index + 1} за тиждень: ${weeklyProfit}</p>
	`);
});

// 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
const totalDaysProfits = new Array(7).fill(0);

profits.forEach((profit) => {
	profit.forEach((dayProfit, dayIndex) => {
		totalDaysProfits[dayIndex] += dayProfit;
	});
});

document.write(`
<p><strong>2. Загальний прибуток усіх магазинів по дням:</strong></p>
<p>Загальний прибуток усіх магазинів за понеділок: ${totalDaysProfits[0]}</p>
<p>Загальний прибуток усіх магазинів за вівторок: ${totalDaysProfits[1]}</p>
<p>Загальний прибуток усіх магазинів за середу: ${totalDaysProfits[2]}</p>
<p>Загальний прибуток усіх магазинів за четвер: ${totalDaysProfits[3]}</p>
<p>Загальний прибуток усіх магазинів за п'ятницю: ${totalDaysProfits[4]}</p>
<p>Загальний прибуток усіх магазинів за суботу: ${totalDaysProfits[5]}</p>
<p>Загальний прибуток усіх магазинів за неділю: ${totalDaysProfits[6]}</p>
`);

// 3) загальний прибуток за робочі дні
let workingDaysProfits = 0;
for (const week of profits) {
	for (let dayIndex = 0; dayIndex < 5; dayIndex++) {
		workingDaysProfits += week[dayIndex];
	}
}

document.write(
	`<p><strong>3. Загальний прибуток за робочі дні</strong>: ${workingDaysProfits}</p>`
);

// 4) загальний прибуток за вихідні дні
let weekendsProfits = 0;
for (const week of profits) {
	for (let dayIndex = 5; dayIndex <= 6; dayIndex++) {
		weekendsProfits += week[dayIndex];
	}
}

document.write(
	`<p><strong>4. Загальний прибуток за вихідні дні</strong>: ${weekendsProfits}</p>`
);
// 5) максимальний прибуток за середу
const wednesdayProfits = profits.map((week) => week[2]);
const maxWednesdayProfit = Math.max(...wednesdayProfits);

document.write(
	`<p><strong>5. Максимальний прибуток за середу</strong>: ${maxWednesdayProfit}</p>`
);

// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
const totalProfitsMore200 = profits
	.flat(Infinity)
	.filter((profit) => profit > 200);

document.write(
	`<p><strong>6. Масив зі значеннями, які більші за 200</strong>:<br> ${JSON.stringify(
		totalProfitsMore200
	)}</p>`
);

// 7) відсортувати кожен тиждень за зростанням
const sortedWeeks = profits.map((week) => [...week].sort((a, b) => a - b));

document.write(
	`<p><strong>7. Кожен тиждень за зростанням</strong>:<br> ${JSON.stringify(
		sortedWeeks
	)}</p>`
);

// 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку),
// тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків.

const weeksDescendingByMax = profits
	.map((week) => [...week, Math.max(...week)])
	.sort((week1, week2) => week2.at(-1) - week1.at(-1))

	weeksDescendingByMax.forEach((week) => week.pop());

document.write(
	`<p><strong>8. Тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку)</strong>:<br> ${JSON.stringify(
		weeksDescendingByMax
	)}</p>`
);

// 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку
// (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми,
// на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).

const weeksDescendingBySum = profits.map((week) => [...week, week.reduce((sum, value) => sum + value)])
	.sort((week1, week2) => week2.at(-1) - week1.at(-1))

	weeksDescendingBySum.forEach((week) => week.pop());

document.write(
	`<p><strong>9. Тижні (рядки) за спаданням суми елементів у рядку</strong>:<br> ${JSON.stringify(
		weeksDescendingBySum
	)}</p>`
);