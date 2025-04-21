"use strict";

// Задача 4.
// Склад. База товарів, 
// які зберігаються на складі: назва товару, одиниця виміру, кількість, фірма виробник (назва, реєстраційний номер). 
// Організувати реєстрацію/відвантаження товарів, фільтрація за назвою товару, фільтрація за назвою фірми.

// Клас компанії-виробника
class Manufacturer {
	constructor(name, regNumber) {
		this.name = name;
		this.regNumber = regNumber;
	}
}

// Клас товару
class Product {
	constructor(name, unit, quantity, manufacturer) {
		this.name = name;
		this.unit = unit;
		this.quantity = quantity;
		this.manufacturer = manufacturer; // об'єкт Manufacturer
	}

	addQuantity(amount) {
		if (amount <= 0) throw new Error("Кількість має бути додатною.");
		this.quantity += amount;
	}

	removeQuantity(amount) {
		if (amount <= 0) throw new Error("Кількість має бути додатною.");
		if (amount > this.quantity) throw new Error("Недостатньо товару на складі.");
		this.quantity -= amount;
	}
}

// Клас склад
class Store {
	#products = [];

	registerProduct(product) {
		// Якщо товар з такою ж назвою і фірмою вже існує — оновлюємо кількість
		const existing = this.#products.find(p =>
			p.name.toLowerCase() === product.name.toLowerCase() &&
			p.manufacturer.name.toLowerCase() === product.manufacturer.name.toLowerCase()
		);

		if (existing) {
			existing.addQuantity(product.quantity);
		} else {
			this.#products.push(product);
		}
	}

	dispatchProduct(productName, manufacturerName, amount) {
		const product = this.#products.find(p =>
			p.name.toLowerCase() === productName.toLowerCase() &&
			p.manufacturer.name.toLowerCase() === manufacturerName.toLowerCase()
		);

		if (!product) {
			console.log("❌ Товар не знайдено.");
			return;
		}

		try {
			product.removeQuantity(amount);
			console.log(`✅ Відвантажено ${amount} ${product.unit} "${product.name}" від ${manufacturerName}.`);
		} catch (err) {
			console.error("❌", err.message);
		}
	}

	filterByProductName(name) {
		return this.#products.filter(p =>
			p.name.toLowerCase().includes(name.toLowerCase())
		);
	}

	filterByManufacturerName(manufacturerName) {
		return this.#products.filter(p =>
			p.manufacturer.name.toLowerCase().includes(manufacturerName.toLowerCase())
		);
	}

	printAll() {
		console.log("📦 Список товарів на складі:");
		this.#products.forEach((p, i) => {
			console.log(`${i + 1}. ${p.name} (${p.quantity} ${p.unit}) — виробник: ${p.manufacturer.name}`);
		});
	}
}

const warehouse = new Store();

const m1 = new Manufacturer("АгроПлюс", "UA123456");
const m2 = new Manufacturer("БудМаркет", "UA987654");

warehouse.registerProduct(new Product("Цемент", "мішків", 100, m2));
warehouse.registerProduct(new Product("Пісок", "тонн", 50, m2));
warehouse.registerProduct(new Product("Насіння кукурудзи", "мішків", 200, m1));
warehouse.registerProduct(new Product("Добрива", "літрів", 300, m1));

// Додати ще цементу
warehouse.registerProduct(new Product("Цемент", "мішків", 50, m2));

// Відвантажити
warehouse.dispatchProduct("Цемент", "БудМаркет", 70);

// Фільтрація
console.log("\n🔍 Товари з назвою 'Цемент':");
console.log(warehouse.filterByProductName("цемент"));

console.log("\n🔍 Товари виробника 'АгроПлюс':");
console.log(warehouse.filterByManufacturerName("агро"));

// Показати всі
warehouse.printAll();