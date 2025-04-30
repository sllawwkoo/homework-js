// Задача 1.
//Дано 10 рядків тексту «Hello!» у окремих div.
// При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.

const divContainer = document.querySelector(".result-wrapper");

function changeColor(element, parent) {
	if (!element) return;

	for (const child of parent.children) {
		child.style.backgroundColor = "";
	}

	let nextElement = element.nextElementSibling;
	while (nextElement) {
		nextElement.style.backgroundColor = "red";
		nextElement = nextElement.nextElementSibling;
	}
}

divContainer.addEventListener("click", (event) => {
	const target = event.target.closest(".hello");

	changeColor(target, divContainer);
});
