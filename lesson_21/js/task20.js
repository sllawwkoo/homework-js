"use strict";

// Задача 4.
//Дано дата виробництва йогурта
// (вводимо рік, місяць, день) та кількість днів придатності.
// Визначити чи є він придатним на даний момент.

const wrapper = document.querySelector(".result-wrapper");
const prodDateInput = document.getElementById("prodDate");
const shelfLifeInput = document.getElementById("shelfLife");
const result = document.getElementById("result");

wrapper.addEventListener("change", checkYogurt);

function checkYogurt() {
	const prodDate = prodDateInput.value;
	const shelfLife = parseInt(shelfLifeInput.value);

	if (!prodDate || isNaN(shelfLife)) return;

	const productionDate = new Date(prodDate);
	const expirationDate = new Date(
		productionDate.getTime() + shelfLife * 24 * 60 * 60 * 1000
	);
	const today = new Date();

	if (today < productionDate) {
		result.textContent = "Йогурт ще не виготовлений.";
	} else if (today <= expirationDate) {
		const daysLeft = Math.ceil(
			(expirationDate - today) / (1000 * 60 * 60 * 24)
		);
		result.textContent = `Йогурт придатний. Залишилось ${daysLeft} днів.`;
	} else {
		result.textContent = "Йогурт НЕ придатний.";
	}
}
