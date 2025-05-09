"use strict";

// Задача 4.
// Виводити на екран скільки хвилин користувач вже на сайті.

window.addEventListener("load", showMinutesOnSite);

function showMinutesOnSite() {
	const timer = document.querySelector(".timer");
	const startTime = Date.now();

	setInterval(() => {
		const now = Date.now();
		const diff = now - startTime;
		const minutes = Math.floor(diff / 60000);
		const seconds = Math.floor((diff % 60000) / 1000);

		const m = minutes.toString().padStart(2, "0");
		const s = seconds.toString().padStart(2, "0");

		timer.innerText = `${m}:${s}`;
	}, 1000);
}