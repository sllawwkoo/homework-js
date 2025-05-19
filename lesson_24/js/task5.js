// Задача 5.
// Дано масив книг (назва, рік видання, автор, ціна).
// Підрахувати загальну вартість книг для кожного із авторів.

function getTotalPriceByAuthor(bookList) {
	const authorTotalMap = new Map();

	for (const book of bookList) {
		const total = authorTotalMap.get(book.author) || 0;
		authorTotalMap.set(book.author, total + book.price);
	}

	return authorTotalMap;
}

const books = [
	{
		title: "Тіні забутих предків",
		year: 1911,
		author: "Михайло Коцюбинський",
		price: 220,
	},
	{
		title: "Сонячна машина",
		year: 1928,
		author: "Володимир Винниченко",
		price: 190,
	},
	{
		title: "Записки українського самашедшого",
		year: 2010,
		author: "Ліна Костенко",
		price: 300,
	},
	{ title: "Маруся Чурай", year: 1979, author: "Ліна Костенко", price: 280 },
	{ title: "Білий Клик", year: 1906, author: "Джек Лондон", price: 210 },
	{ title: "Мартін Іден", year: 1909, author: "Джек Лондон", price: 240 },
	{ title: "1984", year: 1949, author: "Джордж Орвелл", price: 260 },
	{ title: "Колгосп тварин", year: 1945, author: "Джордж Орвелл", price: 180 },
];

const wrapper = document.querySelector(".result-wrapper");

const totals = getTotalPriceByAuthor(books);

for (const [author, total] of totals) {
	const createdElement = document.createElement("p");
	createdElement.textContent = `${author}: ${total} грн`;
	wrapper.appendChild(createdElement);
}
