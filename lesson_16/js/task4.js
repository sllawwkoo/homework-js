// Задача 4.
// Створити клас TBankomat, який моделює роботу банкомата.
// Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень.
// Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.

class Banknote {
	#denomination;
	#count;

	constructor(denomination, count) {
		this.Denomination = denomination;
		this.Count = count;
	}

	get Denomination() {
		return this.#denomination;
	}

	set Denomination(newDenomination) {
		if (newDenomination <= 0) throw new Error("Номінал має бути додатнім.");

		this.#denomination = newDenomination;
	}

	get Count() {
		return this.#count;
	}

	set Count(newCount) {
		if (newCount < 0) throw new Error("Кількість має бути додатною.");

		this.#count = newCount;
	}

	getTotalValue() {
		return this.Denomination * this.Count;
	}
}

class TBankomat {
	constructor(banknotes = []) {
		// Очікуємо масив об'єктів класу Banknote
		this.banknotes = banknotes.sort((a, b) => b.Denomination - a.Denomination); // сортуємо від більшого номіналу
	}

	getMaxAmount() {
		return this.banknotes.reduce((sum, note) => sum + note.getTotalValue(), 0);
	}

	getMinAmount() {
		const available = this.banknotes.findLast((note) => note.Count > 0);
		console.log('available', available);
		return available ? available.Denomination : 0;
	}

	withdrawCash(amount) {
		if (amount % 5 !== 0)
			throw new Error("Сума зняття повинна бути кратною 5.");

		let amountLeft = amount;
		const withdrawal = [];

		for (const note of this.banknotes) {
			const needed = Math.floor(amountLeft / note.Denomination);
			const taken = Math.min(needed, note.Count);

			if (taken > 0) {
				withdrawal.push(new Banknote(note.Denomination, taken));
				amountLeft -= taken * note.Denomination;
			}
		}

		if (amountLeft === 0) {
			// Оновлюємо кількість купюр після успішного зняття
			for (const takenNote of withdrawal) {
				const originalNote = this.banknotes.find(
					(note) => note.Denomination === takenNote.Denomination
				);
				originalNote.Count -= takenNote.Count;
			}

			console.log(`Видано ${amount} грн наступними купюрами:`);
			withdrawal.forEach((n) =>
				console.log(`${n.Denomination} грн × ${n.Count}`)
			);
			return withdrawal;
		} else {
			console.log("Неможливо видати вказану суму наявними купюрами.");
			return null;
		}
	}

	toString() {
		return (
			"Купюри в банкоматі:\n" +
			this.banknotes
				.map(
					(n) =>
						`${n.Denomination} грн: ${
							n.Count
						} шт (всього: ${n.getTotalValue()} грн)`
				)
				.join("\n")
		);
	}
}


const banknotes = [
	new Banknote(200, 2),
	new Banknote(100, 5),
	new Banknote(50, 10),
	new Banknote(20, 10),
	new Banknote(10, 10),
	new Banknote(5, 10),
];

const atm = new TBankomat(banknotes);

console.log(atm.toString());
console.log("Максимальна сума:", atm.getMaxAmount());
console.log("Мінімальна сума:", atm.getMinAmount());

atm.withdrawCash(385); // Успішне зняття
console.log(atm.toString());

atm.withdrawCash(123); // Неможливе зняття