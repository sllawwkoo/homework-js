// Задача 3.
//Дано 5 випадковим чином згенерованих нумерованих списків з рандомними числами
// (кількість елементів у списку випадкова від 1 до 10, елементи випадкові – від 1 до 100).
// При натисненні на кнопку нумеровані списки
// з парною кількістю елементів зафарбувати у зелений колір, інші у червоний.

function getRandomNumber(min = 1, max = 10) {
	return min + Math.floor(Math.random() * (max - min + 1));
}

function creatList() {
	const list = document.createElement("ul");
	list.classList.add("list__ul");
	const listLength = getRandomNumber();
	for (let i = 0; i < listLength; i++) {
		const listItem = document.createElement("li");
		listItem.textContent = getRandomNumber(1, 100);
		listItem.classList.add("list__li");
		list.appendChild(listItem);
	}
	return list;
}

const parent = document.querySelector(".list__box");
for (let index = 0; index < 5; index++) {
	parent.append(creatList());
}

const button = document.querySelector(".list__button");
button.addEventListener("click", () => {
	const listItems = document.querySelectorAll(".list__ul");
	
	for (const listItem of listItems) {
		if (listItem.children.length % 2 === 0) {
			listItem.style.color = "green";
		} else {
			listItem.style.color = "red";
		}
	}
});
