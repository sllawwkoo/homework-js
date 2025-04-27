// Задача 4.
// Користувач задає кількість оцінок і натискає на кнопку «get table».
// В результаті формується таблиця з input, куди користувач вводить оцінки.
// Після цього натискає на кнопку “get sum” і знаходить середнє значення.

const grades = document.querySelector(".grades");
const countGrades = document.querySelector("#countGrades");
const creatTable = document.querySelector("#creatTable");

function createInputCell() {
	const divEl = document.createElement("div");
	divEl.classList.add("grades__cell");
	const inputEl = document.createElement("input");
	inputEl.classList.add("grades__input");
	inputEl.type = "number";
	inputEl.placeholder = "Оцінка";
	divEl.append(inputEl);
	return divEl;
}

function createGridTable(amount) {
	const divEl = document.createElement("div");
	divEl.classList.add("grades__grid");
	for (let i = 0; i < amount; i++) {
		divEl.append(createInputCell());
	}
	return divEl;
}

function createResultCell() {
	const divEl = document.createElement("div");
	divEl.classList.add("grades__result");
	const buttonEl = document.createElement("button");
	buttonEl.classList.add("grades__button");
	buttonEl.id = "getSum";
	buttonEl.innerText = "Середній бал";
	const spanEl = document.createElement("span");
	spanEl.id = "result";
	divEl.append(buttonEl, spanEl);
	return divEl;
}

function createTable(amount) {
	const tableEl = document.createElement("div");
	tableEl.classList.add("grades__table");
	tableEl.append(createGridTable(amount), createResultCell());
	return tableEl;
}

creatTable.onclick = () => {
	if (countGrades.value <= 0) return;
	const newTable = createTable(countGrades.value);
	const oldTable = document.querySelector(".grades__table");

	oldTable?.replaceWith(newTable);
	grades.append(newTable);

	const avarageScore = document.getElementById("getSum");

	if (avarageScore) {
		avarageScore.onclick = () => {
			console.log("avarageScore");
			const inputs = document.querySelectorAll(".grades__input");
			let sum = 0;
			for (let i = 0; i < inputs.length; i++) {
				sum += Number(inputs[i].value);
			}
			const result = document.querySelector("#result");
			if (sum > 0) {
				result.innerText = (sum / inputs.length).toFixed(1);
			}
		};
	}
};
