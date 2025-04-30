// Задача 7.
// Відобразити падаючий сніг.
// Сніжинка з’являється у верхній частині екрану (top =0)
// і з випадковою швидкістю рухається вниз
// (у setInterval викликати метод, у якому додавати крок до top).
// Як тільки сніжинка досягає нижньої частини екрану (top>maxTop)
// вона знову повинна з’явитись у верхній частині екрану (top=0).

class Snowflake {
	constructor(container) {
		this.container = container;
		this.element = document.createElement("div");
		this.element.className = "snowflake";
		this.reset();
		container.append(this.element);
	}

	reset() {
		this.top = 0;
		this.left = Math.random() * window.innerWidth;
		this.speed = 1 + Math.random() * 3;
		this.element.style.left = `${this.left}px`;
	}

	updateSnowflake() {
		this.top += this.speed;
		if (this.top > window.innerHeight) {
			this.reset();
			this.top = 0;
		}
		this.element.style.top = `${this.top}px`;
	}
}

class Snowfall {
	constructor(count = 50, container = document.body) {
		this.container = container;
		this.count = count;
		this.snowflakes = [];
		this.intervalId = null;
	}

	run() {
		for (let i = 0; i < this.count; i++) {
			this.snowflakes.push(new Snowflake(this.container));
		}

		if (!this.intervalId) {
			this.intervalId = setInterval(() => this.update(), 30);
		}
	}

	update() {
		this.snowflakes.forEach((flake) => flake.updateSnowflake());
	}

	stop() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = null;
		}
	}
}

const snow = new Snowfall(100);
snow.run();
