// Задача 2.
// Створити клас Bank, у якому зберігається масив клієнтів. Виконати такі операції
// ●	Вивести всіх простих клієнтів;
// ●	Вивести всіх клієнтів GoldenClient;
// ●	Знайти сумарну кількість грошей на рахунку;


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

class Bank {
	constructor(clientsList) {
		this.clientsList = clientsList;
	}

	getClients() {
		return this.clientsList.filter((client) => !(client instanceof GoldenClient)).map((client) => client.fullName);
	}


	getGoldenClients() {
		return this.clientsList.filter((client) => client instanceof GoldenClient).map((client) => client.fullName);
	}



	getTotalAmount() {
		return this.clientsList.reduce((money, client) => money + client.amount, 0);
	}
}

const clients = [
	new Client(1, "Ivanov Ivan Ivanovich", 1000),
	new Client(2, "Petrov Petro Petrovich", 2000),
	new Client(3, "Sidorov Sidor Sidorovich", 3000),
	new GoldenClient(4, "Kovalenko Ivan Petrovich", 2000, 5000, 5),
	new GoldenClient(5, "Shewchuk Petro Petrovich", 2000, 5000, 5),
	new GoldenClient(6, "Tkachenko Sidor Petrovich", 3000, 5000, 5),
];

const bank = new Bank(clients);
document.getElementById("result1").innerText = `Прості клїєнти: ${bank.getClients()}`
document.getElementById("result2").innerText = `GoldenClient: ${bank.getGoldenClients()}`;
document.getElementById("result3").innerText = `Загальна сума коштів в банку: ${bank.getTotalAmount()} грн.`;