"use strict";

// Задача 5.
// Дано послідовність оцінок учня. Підрахувати кількість:
// 1)	двійок
// 2)	кількість хороших оцінок (добре, відмінно);
// 3)	кількість оцінок, які нижче середнього.

const marks = [3, 2, 3, 4, 5, 5, 2, 4, 5, 3];

function countMarks(marks) {
	let badMarks = 0,
		goodMarks = 0,
		averageMarks = 0;

	for (let i = 0; i < marks.length; i++) {
		if (marks[i] === 2) badMarks++;
		else if (marks[i] === 3) averageMarks++;
		else goodMarks++;
	}

	return [badMarks, averageMarks, goodMarks];
}

const [failingGrades, averageGrades, goodGrades] = countMarks(marks);

document.write(`
<p>Оцінки учня: ${marks}</p>
<p>Кількість двійок: ${failingGrades}</p>
<p>Кількість хороших оцінок: ${goodGrades}</p>
<p>Кількість трійок: ${averageGrades}</p>
`);
