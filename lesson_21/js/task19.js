"use strict";

// Задача 4.
// Користувачка планувала оформила дектретну відпустку на 200 днів 
// (дата початку відпустки вводиться). 
// Визначити чи відпустка вже триває і чи не закінчилась.

const startDateInput = document.getElementById("startDate");
const result = document.getElementById("result");

startDateInput.addEventListener("change", checkMaternityLeave);

function checkMaternityLeave() {
	const inputValue = startDateInput.value;
	if (!inputValue) return;

	const startDate = new Date(inputValue);
	const endDate = new Date(startDate.getTime() + 200 * 24 * 60 * 60 * 1000);
	const now = new Date();
	// now.setFullYear(2027);// для перевірки

	if (now < startDate) {
		result.textContent = "Відпустка ще не почалася.";
	} else if (now >= startDate && now <= endDate) {
		result.textContent = "Відпустка триває.";
	} else {
		result.textContent = "Відпустка завершилась.";
	}
}