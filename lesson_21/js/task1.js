// Задача 1.
// Створити клас Client
// Властивості	ID
// ПІБ
// Кількість грошей на рахунку
// Методи	Додавання грошей
// Зняття грошей
// ToString
// На основі цього класу створити клас GoldenClient
// Властивості	ID
// ПІБ
// Кількість грошей на рахунку
// Ліміт кредитних коштів
// Відсоток за використання кредитних коштів
// Методи	Додавання грошей
// Зняття грошей
// Визначення пені за використання кредитних коштів
// ToString

class Client {
	constructor(id, fullName, amount) {
		this.id = id;
		this.fullName = fullName;
		this.amount = amount;
	}

	addMoney(money) {
		this.amount += money;
	}

	withdrawMoney(money) {
		if (money > this.amount) throw new Error("Недостатньо коштів.");
		this.amount -= amount;
	}

	toString() {
		return `ID клієнта: ${this.id}, <br> ПІБ: ${this.fullName}, <br> Кількість грошей на рахунку: ${this.amount} грн. <br>`;
	}
}

class GoldenClient extends Client {
	constructor(id, fullName, amount, creditLimit, interestRate) {
		super(id, fullName, amount);
		this.creditLimit = creditLimit;
		this.interestRate = interestRate;
		this.creditAmount = 0;
	}

	withdrawMoney(money) {
		if (money > this.amount + this.creditLimit)
			throw new Error("Недостатньо коштів.");
		else if (money > this.amount && money <= this.creditLimit + this.amount) {
			this.creditAmount = money - this.amount;
			this.amount = 0;
			this.creditLimit -= this.creditAmount;
		} else {
			this.amount -= money;
		}
	}

	addMoney(money) {
		if (money <= 0) throw new Error("Кількість має бути додатною.");

		if (this.creditAmount > 0) {
			if (money >= this.creditAmount) {
				money -= this.creditAmount;
				this.creditLimit += this.creditAmount;
				this.creditAmount = 0;
				this.amount += money;
			} else {
				this.creditAmount -= money;
				this.creditLimit += money;
			}
		} else {
			this.amount += money;
		}
	}

	calculateCreditPenalty() {
		if (this.creditAmount === 0) return 0;
		return (this.creditAmount * this.interestRate) / 100;
	}

	toString() {
		return (
			super.toString() +
			`Ліміт кредитних коштів: ${
				this.creditLimit
			} грн, <br> Відсоток за використання кредитних коштів: ${
				this.interestRate
			}% <br> Пені за використання кредитних коштів: ${this.calculateCreditPenalty()} грн <br><hr>`
		);
	}
}

const client = new GoldenClient(208, "Petrov Petro Petrovich", 2000, 5000, 5);
client.withdrawMoney(4000);
document.getElementById("result1").innerHTML = client.toString();

client.addMoney(10000);
document.getElementById("result2").innerHTML = client.toString();
