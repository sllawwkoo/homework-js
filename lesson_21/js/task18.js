// Задача 8.
// Визначити скільки пройшло секунд після заходу 
// на сайт перш ніж користувач зробив рух мишкою.

window.addEventListener("load", showSecondsAfterSiteLoad);

function showSecondsAfterSiteLoad() {
	const startTime = Date.now(); // момент завантаження сторінки
	const result = document.getElementById("result");

	function handleMouseMove() {
		const currentTime = Date.now();
		const secondsPassed = ((currentTime - startTime) / 1000).toFixed(2);

		result.textContent = `Ви зробили рух мишкою через ${secondsPassed} секунд`;

		document.body.removeEventListener("mousemove", handleMouseMove);
	}

	document.body.addEventListener("mousemove", handleMouseMove);
}