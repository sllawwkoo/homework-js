// Задача 3.
// Визначити скільки залишилось до кінця робочого дня (до 17.00)

function getTimeLeftUntilEndOfWorkday() {
	const now = new Date();
	// now.setHours(17);
	const endOfWorkday = new Date(
		now.getFullYear(),
		now.getMonth(),
		now.getDate(),
		17,
		0,
		0
	); 

	const diffMs = endOfWorkday - now;

	const output = document.getElementById("timeLeft");

	if (diffMs <= 0) {
		clearInterval(timerId);
		output.innerText = "Робочий день завершено.";
		return;
	}

	const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
	const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
	const diffSeconds = Math.floor((diffMs % (1000 * 60)) / 1000);

	output.innerText = `${diffHours.toString().padStart(2, "0")} год ${diffMinutes
		.toString()
		.padStart(2, "0")} хв ${diffSeconds.toString().padStart(2, "0")} сек`;
}

const timerId = setInterval(getTimeLeftUntilEndOfWorkday, 1000);
