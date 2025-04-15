// Задача 4.
// Розробити клас Baner
// Поля	Масив об’єктів ( графічних зображень та посилань на сайти)
// методи	Метод випадкового вибору об’єкта (графічного зображення та посилання)
// Метод виведення випадкового банера

const banners = [
	{
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
		link: "https://reactjs.org/",
	},
	{
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Redux.png/512px-Redux.png",
		link: "https://redux.js.org/",
	},
	{
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png",
		link: "https://nodejs.org/",
	},
	{
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/640px-Sass_Logo_Color.svg.png",
		link: "https://sass-lang.com/",
	},
];

class Banner {
	constructor(arr) {
		this.arr = arr;
	}

	getRandomBanner() {
		return this.arr[Math.floor(Math.random() * this.arr.length)];
	}

	showBanner() {
		const { img, link } = this.getRandomBanner();

		document.write(`
		<div class="banner">
			<a href="${link}" target="_blank"><img src="${img}" ></a>
		</div>
		`);
	}
}

const banner = new Banner(banners);
banner.showBanner();
banner.showBanner();