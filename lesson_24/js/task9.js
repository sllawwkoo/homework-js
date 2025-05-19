// Задача 9.
// Дано два списки прізвищ студентів,
// що відвідують гуртки з математики і історії.
// Підрахувати скільки студентів з гуртка з історії
// також відвідують гурток з математики.
// Також підрахувати скільки всього студентів відвідують хоча б один гурток.

function createdElement(parent, text) {
	const createdElement = document.createElement("p");
	createdElement.textContent = text;
	parent.appendChild(createdElement);
}

function countStudentsInAnyClub(mathList, historyList) {
	const allStudents = new Set([...mathList, ...historyList]);
	return allStudents.size;
}

function countHistoryStudentsInMathClub(mathList, historyList) {
	const mathSet = new Set(mathList);
	const historySet = new Set(historyList);
	return historySet.intersection(mathSet).size;
}

const mathClub = [
	"Іван Петренко",
	"Оксана Іваненко",
	"Марія Коваль",
	"Андрій Сидоренко",
	"Ігор Литвин",
];

const historyClub = [
	"Оксана Іваненко",
	"Марія Коваль",
	"Сергій Шевченко",
	"Ірина Павленко",
];

const wrapper = document.querySelector(".result-wrapper");

const allStudents = countStudentsInAnyClub(mathClub, historyClub);
const historyInMath = countHistoryStudentsInMathClub(mathClub, historyClub);

createdElement(
	wrapper,
	`Кількість студентів які відвідують хоча б один гурток: ${allStudents}`
);
createdElement(
	wrapper,
	`Кількість студентів з історії які відвідують гурток з математики: ${historyInMath}`
);
