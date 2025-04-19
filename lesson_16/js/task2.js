"use strict";

// Задача 2.
// Створити клас TMoney для роботи з грошовими сумами.
// Сума повинна зберігатися у вигляді доларового еквіваленту.
// Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях збільшиться на 100.
// Курс долара зберігати в окремому полі.

class TMoney {
	#amountUSD;
	#exchangeRate;

	constructor(amountUAH, exchangeRate) {
		this.ExchangeRate = exchangeRate;
		this.#amountUSD = amountUAH / exchangeRate;
	}

	// Курс
	get ExchangeRate() {
		return this.#exchangeRate;
	}

	set ExchangeRate(rate) {
		if (rate <= 0) throw new Error("Курс повинен бути додатнім.");
		this.#exchangeRate = rate;
	}

	// Сума в гривнях
	getAmountUAH() {
		return parseFloat((this.#amountUSD * this.ExchangeRate).toFixed(2));
	}

	// Додати гривні
	depositUAH(amountUah) {
		if (amountUah <= 0) throw new Error("Сума повинна бути більшою за 0.");
		this.#amountUSD += amountUah / this.#exchangeRate;
	}

	// Зняти гривні
	withdrawUAH(amountUah) {
		if (amountUah <= 0) throw new Error("Сума повинна бути більшою за 0.");

		const usdToWithdraw = amountUah / this.#exchangeRate;
		if (usdToWithdraw > this.#amountUSD) throw new Error("Недостатньо коштів!");

		this.#amountUSD -= usdToWithdraw;
	}

	// Курс долара, при якому сума у гривнях збільшиться на 100
	getRateForUahIncreaseBy100() {
		const currentUAH = this.#amountUSD * this.#exchangeRate;
		const newRate = (currentUAH + 100) / this.#amountUSD;
		return parseFloat(newRate.toFixed(2));
	}

	// Показати стан
	toString() {
		return `Сума в гривнях: ${this.getAmountUAH()} грн, Курс: ${
			this.ExchangeRate
		} грн/$, Сума в доларах: ${this.#amountUSD.toFixed(
			2
		)} USD, Курс долара, при якому сума у гривнях збільшиться на 100: ${this.getRateForUahIncreaseBy100()} грн/$`;
	}
}

const wallet = new TMoney(4100, 41);
console.log(wallet.toString());

wallet.depositUAH(5500);
console.log(wallet.toString());

wallet.withdrawUAH(2500);
console.log(wallet.toString());

wallet.ExchangeRate = 41.5;
console.log(wallet.toString());
