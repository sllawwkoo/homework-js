// Задача 5.
// Відображаємо картки товарів, які користувач може вибирати.
// Вибраний товар має зелену рамку
// (при кліку робити toogle з класом вибраного елемента)

function toggleProductSelection(event) {
	const product = event.target.closest(".card");
	if (product) product.classList.toggle("active");
}

const cards = document.querySelector(".cards");
cards.addEventListener("click", toggleProductSelection);


