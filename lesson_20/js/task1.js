// Задача 1.
//Сяючі зорі.
// Вказана кількість зірочок повинна з’являтися у випадковій частині екрану.
// Кожна зірка (це екземпляр класу Star) з певним кроком і інтервалом
// збільшується від мінімального до максимального розміру.
// Як тільки досягнути максимального розміру
// зірочка повинна з’являтися у іншій випадковій позиції.

class Star {
	constructor(maxStep, maxInterval) {
		this.maxStep = maxStep;
		this.maxInterval = maxInterval;
		this.scale = 0.2;
		this.opacity = 1;
	}

	getRundomNumber(min, max) {
		return min + Math.floor(Math.random() * (max - min + 1));
	}

	setRandomPosition() {
		const x = Math.random() * window.innerWidth;
		const y = Math.random() * window.innerHeight;
		this.star.style.left = `${x}px`;
		this.star.style.top = `${y}px`;
	}

	setSize() {
		this.star.style.width = `${this.getRundomNumber(1, 10)}px`;
		this.star.style.height = `${this.star.style.width}px`;
	}

	growAndResetStar() {
		this.scale += 0.2;
		this.opacity -= 0.1;
		if (this.scale >= this.maxStep) {
			this.scale = 0.2;
			this.opacity = 1;
			this.star.style.transform = `scale(${this.scale})`;
			this.star.style.opacity = this.opacity;

			this.setRandomPosition();
			return;
		}
		this.star.style.transform = `scale(${this.scale})`;
		this.star.style.opacity = this.opacity;
	}

	render(selector) {
		const star = document.createElement("div");
		star.classList.add("star");
		star.style.transform = `scale(${this.scale})`;
		star.style.opacity = this.opacity;
		selector.append(star);

		this.star = star;
		this.setSize();
		this.setRandomPosition();

		setInterval(() => {
			this.growAndResetStar();
		}, this.getRundomNumber(500, this.maxInterval));
	}
}

for(let i = 0; i < 100; i++) {
	const star = new Star(2, 1000);
	star.render(document.body);
}

