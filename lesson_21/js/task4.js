"use strict";

// Задача 4.
// Користувач задає місяць навчання учня
// (перевіряти чи є числом, чи від 1 до 12, чи не канікули)
// та оцінку (перевіряти чи є числом, чи від 1 до 100).
// Вивести чи зможе він виправити оцінку
// (якщо оцінка погана і це не останній місяць у семестрі) .
// Обробку усіх помилок зробити з використанням відповідних класів.

class NotANumberError extends Error {
	constructor(field) {
		super(`${field} має бути числом.`);
		this.name = "NotANumberError";
	}
}

class MonthRangeError extends Error {
	constructor() {
		super("Місяць має бути в діапазоні від 1 до 12.");
		this.name = "MonthRangeError";
	}
}

class VacationMonthError extends Error {
	constructor() {
		super("Це канікули. Навчання у цей місяць не проводиться.");
		this.name = "VacationMonthError";
	}
}

class ScoreRangeError extends Error {
	constructor() {
		super("Оцінка має бути в діапазоні від 1 до 100.");
		this.name = "ScoreRangeError";
	}
}

document.querySelector(".scores__button").addEventListener("click", () => {
	const monthInput = document.getElementById("month").value;
	const scoreInput = document.getElementById("scores").value;
	const result = document.getElementById("result");
	result.textContent = "";

	try {
		const month = parseInt(monthInput);
		const score = parseInt(scoreInput);

		if (isNaN(month)) throw new NotANumberError("Місяць");
		if (month < 1 || month > 12) throw new MonthRangeError();

		const vacationMonths = [6, 7, 8];
		if (vacationMonths.includes(month)) throw new VacationMonthError();

		if (isNaN(score)) throw new NotANumberError("Оцінка");
		if (score < 1 || score > 100) throw new ScoreRangeError();

		const isBadScore = score < 60;
		const firstSemester = [9, 10, 11, 12];
		const secondSemester = [1, 2, 3, 4, 5];

		const isLastMonthInSemester =
			(firstSemester.includes(month) && month === 12) ||
			(secondSemester.includes(month) && month === 5);

		if (isBadScore && !isLastMonthInSemester) {
			result.textContent = "Учень може виправити оцінку.";
		} else if (isBadScore && isLastMonthInSemester) {
			result.textContent = "Учень не встигне виправити оцінку.";
		} else {
			result.textContent = "Оцінка хороша. Немає потреби виправляти.";
		}

		result.classList.remove("error");
		result.classList.add("success");
	} catch (error) {
		result.textContent = `Помилка: ${error.message}`;
		result.classList.remove("success");
		result.classList.add("error");
	}
});
