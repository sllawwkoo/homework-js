// Задача 4.
// Створити функцію, яка дозволяє визначити, 
// чи знаходиться вказана дата і час у межах поточного тижня 
// (від понеділка 0 год, 0хв, до неділі 23год.59хв)

const timeInput = document.getElementById("time");
const result = document.getElementById("result");

timeInput.addEventListener("change", checkIfInCurrentWeek);

function checkIfInCurrentWeek() {
	const inputValue = timeInput.value;
	if (!inputValue) return;

	const inputDate = new Date(inputValue);
	const now = new Date();

	// Знаходимо понеділок цього тижня (початок тижня)
	const dayOfWeek = now.getDay(); // 0 (неділя) - 6 (субота)
	const diffToMonday = (dayOfWeek + 6) % 7; // зміщення до понеділка

	const monday = new Date(now);
	monday.setHours(0, 0, 0, 0);
	monday.setDate(now.getDate() - diffToMonday);

	// Кінець тижня (неділя 23:59:59)
	const sunday = new Date(monday);
	sunday.setDate(monday.getDate() + 6);
	sunday.setHours(23, 59, 59, 999);

	if (inputDate >= monday && inputDate <= sunday) {
		result.textContent = "Дата знаходиться в межах поточного тижня.";
	} else {
		result.textContent = "Дата поза межами поточного тижня.";
	}
}
