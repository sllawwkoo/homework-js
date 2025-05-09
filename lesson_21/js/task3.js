// Задача 3.
// . Розробити Класи
// House	Dog	Bird
// House
// --- властивості ---
// ●	Координата Х
// ●	Координата У
// ●	шлях до зображення
// ●	інтервал оновлення
// --- методи ---
// ●	генерування елемента розмітки
// ●	оновлення через вказаний інтервал (збільшення або зменшення масштабу (об’єкт не рухається)
//Dog
// 	--- властивості ---
// ●	Координата Х
// ●	Координата У
// ●	шлях до зображення
// ●	інтервал оновлення
// --- методи ---
// ●	генерування елемента розмітки
// ●	оновлення через вказаний інтервал (випадкове зміщення по горизонталі (зміна координати Х))
//Bird
// 	--- властивості ---
// ●	Координата Х
// ●	Координата У
// ●	шлях до зображення
// ●	інтервал оновлення
// --- методи ---
// ●	генерування елемента розмітки
// ●	оновлення через вказаний інтервал (випадкове переміщення у довільному напрямку)

// Подумайте яким має бути спільний клас предок.

class MovingObject {
	constructor(xPos, yPos, imgPath, interval, className) {
		this.xPos = xPos;
		this.yPos = yPos;
		this.imgPath = imgPath;
		this.interval = interval;
		this.className = className;
	}

	getRandomNumber(min = 1, max = 100) {
		return min + Math.floor(Math.random() * (max - min + 1));
	}

	setPosition() {
		this.$div.style.left = `${this.xPos}%`;
		this.$div.style.top = `${this.yPos}%`;
	}

	createElement() {
		const divElement = document.createElement("div");
		divElement.classList.add(this.className);

		this.$div = divElement;
		this.setPosition();
		const imgElement = document.createElement("img");
		imgElement.src = this.imgPath;
		divElement.append(imgElement);

		return divElement;
	}

	render(selector) {
		const divEl = this.createElement();
		if (selector) selector.append(divEl);
	}
}

class House extends MovingObject {
	startScalingAnimation() {
		setInterval(() => {
			if (this.$div.style.transform === "scale(1.3)") 
			this.$div.style.transform = 'scale(1)';
			else this.$div.style.transform = 'scale(1.3)';
		}, this.interval);
	}
}

class Dog extends MovingObject {
	startWanderingHorizontally() {
		setInterval(() => {
			const newXPos = this.getRandomNumber(0, 80);
			this.xPos = newXPos;
			this.setPosition();
		}, this.interval);
	}
}

class Bird extends MovingObject {
	startFlyingRandomly() {
		setInterval(() => {
			const newXPos = this.getRandomNumber(0, 80);
			const newYPos = this.getRandomNumber(0, 80);
			this.yPos = newYPos;
			this.xPos = newXPos;
			this.setPosition();
		}, this.interval);
	}
}



const urlHouse = "../img/house.png";
const house = new House(10, 10, urlHouse, 1500, 'house');
house.render(document.querySelector(".result-wrapper"));
house.startScalingAnimation();

const urlDog = "../img/dog.png";
const dog = new Dog(10, 30, urlDog, 2000, 'dog');
dog.render(document.querySelector(".result-wrapper"));
dog.startWanderingHorizontally();

const urlBird = "../img/bird.png";
const bird = new Bird(50, 50, urlBird, 1500, 'bird');
bird.render(document.querySelector(".result-wrapper"));
bird.startFlyingRandomly();