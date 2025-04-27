// Задача 4.
// Наперед задано у скрипті масив зі списком бажань. 
// Після завантаження сторінки випадковим чином 
// вибираються 3 і відображаються у окремих div (їх треба створити і додати на сторінку)

const wishes = [
	"Подорожувати світом",
	"Вивчити нову мову",
	"Купити власний будинок",
	"Стати експертом у своїй професії",
	"Завести собаку",
	"Написати книгу",
	"Побачити північне сяйво",
	"Відкрити власний бізнес",
	"Навчитися грати на гітарі",
	"Жити біля моря",
];

function getRandomIndex (arr) {
	return Math.floor(Math.random() * arr.length);
}

function getWishList(arr, step = 3) {
	const list = document.querySelector(".wishes-list");
	if (list) {
		for (let i = 0; i < step; i++) {
			const index = getRandomIndex(arr);
			const li = document.createElement("li");
			li.innerText = arr[index];
			list.append(li);
		}
	}
}

window.onload = () => getWishList(wishes);