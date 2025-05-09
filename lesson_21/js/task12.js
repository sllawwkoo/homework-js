// Задача 2.
// Вводимо час початку процедури (процедура триває 30хв).
// Визначити, чи процедура ще триває.

const timeStart = document.getElementById("time");
const result = document.getElementById("result");

function checkProcedure() {
	const inputValue = timeStart.value;

	if (!inputValue) return;

	const startTime = new Date(inputValue);
	const now = new Date();

	const endTime = new Date(startTime.getTime() + 30 * 60 * 1000);

	if (now < startTime) result.textContent = "Процедура ще не почалась.";
	else if (now >= startTime && now < endTime) result.textContent = "Процедура триває.";
	else result.textContent = "Процедура завершена.";
}

timeStart.addEventListener("change", checkProcedure);
