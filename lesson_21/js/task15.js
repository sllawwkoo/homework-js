// Задача 5.
// При заході на сайт вітати користувача або відображати повідомлення про те,  
// скільки хвилин залишилось до початку робочого дня (початок о 8.00).

function showTimeUntilWorkStart() {
	const now = new Date();
	// now.setHours(6); //для тестування
	const endOfWorkday = new Date(
		now.getFullYear(),
		now.getMonth(),
		now.getDate(),
		8,
		0,
		0
	);

	const diffMs = endOfWorkday - now;

	const output = document.getElementById("timeLeft");

	if (diffMs <= 0) {
		clearInterval(timerId);
		output.innerText = "Робочий день почався.";
		return;
	}

	const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
	const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
	const diffSeconds = Math.floor((diffMs % (1000 * 60)) / 1000);

	output.innerText = `${diffHours.toString().padStart(2, "0")} год ${diffMinutes
		.toString()
		.padStart(2, "0")} хв ${diffSeconds.toString().padStart(2, "0")} сек`;
}

const timerId = setInterval(showTimeUntilWorkStart, 1000);