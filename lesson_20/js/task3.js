// Задача 3.
//На сторінці міститься певна кількість кнопок і інпутів.
// Підраховувати загальну кількість кліків окремо на кнопках і окремо на інпутах.

class Input {
	static count = 0;
	constructor(number) {
		this.number = number;
	}

	clickInput() {
		Input.count++;
		const resultInput = document.getElementById("resultInput");
		resultInput.innerText = Input.count;
	}


	render(selector) {
		const input = document.createElement("input");
		input.type = "text";
		input.placeholder = `Інпут №${this.number}`;
		input.addEventListener("click", this.clickInput.bind(this));
		selector.append(input);
	}
}

class Button {
	static count = 0;
	constructor(number) {
		this.number = number;
	}

	clickButton() {
		Button.count ++;
		const resultBtn = document.getElementById("resultBtn");
		resultBtn.innerText = Button.count;
	}

	render(selector) {
		const button = document.createElement("button");
		button.textContent = `Кнопка №${this.number}`;

		button.addEventListener("click", this.clickButton.bind(this));
		selector.append(button);
	}
}

function renderRandomElements(container, totalElements) {
	const elements = [];

	for (let i = 1; i <= totalElements; i++) {
		const isInput = Math.random() < 0.5;
		elements.push(isInput ? "input" : "button");
	}

	let inputCount = 0;
	let buttonCount = 0;

	elements.forEach((type) => {
		if (type === "input") {
			inputCount++;
			const input = new Input(inputCount);
			input.render(container);
		} else {
			buttonCount++;
			const button = new Button(buttonCount);
			button.render(container);
		}
	});
}

const container = document.querySelector(".items-block");
renderRandomElements(container, 16);

