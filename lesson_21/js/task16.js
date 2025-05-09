// Задача 6.
// Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.

function showTimeWithOffset(city, offsetHours) {
	const containerId = `time${city}`;
	let container = document.getElementById(containerId);

	setInterval(() => {
		const now = new Date();
		// Додаємо часовий зсув (в мілісекундах)
		const localTime = new Date(now.getTime() + offsetHours * 60 * 60 * 1000);

		const hours = localTime.getUTCHours().toString().padStart(2, "0");
		const minutes = localTime.getUTCMinutes().toString().padStart(2, "0");
		const seconds = localTime.getUTCSeconds().toString().padStart(2, "0");

		container.innerText = `${hours}:${minutes}:${seconds}`;
	}, 1000);
}

// Приклад використання (годинні зсуви від UTC)
showTimeWithOffset("London", 1);
showTimeWithOffset("Paris", 2);
showTimeWithOffset("Sidney", 10);
