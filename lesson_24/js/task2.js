// Задача 2.
// Дано Shop - клас, що містить список товарів
// (масив об’єктів класу Product (назва, ціна, кількість одиниць).
// Додати можливість ітератора до класу Shop,
// щоб при ітеруванні для кожного елемента виводився рядок «товар-загальна вартість»

class Product {
	constructor(name, price, quantity) {
		this.name = name;
		this.price = price;
		this.quantity = quantity;
	}

	[Symbol.toPrimitive](hint) {
		let result;
		switch (hint) {
			case "string":
				result = this.name;
				break;
			case "number":
				result = this.price * this.quantity;
				break;
			case "default":
				result = this;
				break;
		}

		return result;
	}
}

class Shop {
	constructor(productList) {
		this.productList = productList;
	}

	[Symbol.iterator]() {
		this.index = 0;
		return this;
	}

	next() {
		if (this.index < this.productList.length) {
			const product = this.productList[this.index++];
			return {
				value: `Товар: ${product} - загальна вартість ${Number(product)} грн.`,
				done: false,
			};
		} else {
			return {
				done: true,
			};
		}
	}
}

const productList = [
	new Product("Зубна щітка", 45, 2),
	new Product("Мило туалетне", 20, 4),
	new Product("Пральний порошок", 135, 5),
	new Product("Шампунь для волосся", 95, 1),
	new Product("Пакет для сміття (рулон)", 30, 2),
	new Product("Ручка гелева", 18, 5),
	new Product("Батарейки AA (2 шт.)", 32, 3),
	new Product("Зошит 96 арк.", 27, 4),
	new Product("Лампочка LED 12W", 55, 2),
	new Product("Серветки паперові (пачка)", 24, 3),
];

const shop = new Shop(productList);

const wrapper = document.querySelector(".result-wrapper");

for (const product of shop) {
	const createdElement = document.createElement("p");
	createdElement.textContent = product;
	wrapper.appendChild(createdElement);
}
