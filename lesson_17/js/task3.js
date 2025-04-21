"use strict";

// Задача 3.
// Створити клас Нагадувач. 
// Кожні вказані кількості секунд (використати setInterval) програма нагадує про якусь подію (це просто текст) 
// і також виводиться порядковий номер скільки раз вже нагадування було. 
// Зробити так, щоб неможна було зробити одночасно декілька об’єктів-нагадувачів. 
// Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.

class Reminder {
	static #instance = null;
	#message;
	#intervalSec;
	#counter = 0;
	#intervalId = null;

	constructor(message, intervalSec = 1) {
		if (Reminder.#instance) {
			return Reminder.#instance;
		}

		this.#message = message;
		this.#intervalSec = intervalSec;

		this.startReminder();
		Reminder.#instance = this;
	}

	startReminder() {
		if (this.#intervalId) return; // захист від повторного запуску

		this.#intervalId = setInterval(() => {
			this.#counter++;
			console.log(`🔔 Нагадування #${this.#counter}: ${this.#message}`);
		}, this.#intervalSec * 1000);
	}

	stop() {
		if (this.#intervalId) {
			clearInterval(this.#intervalId);
			this.#intervalId = null;
			console.log("⏹️ Нагадування зупинено.");
		}
	}

	changeMessage(newMessage) {
		this.#message = newMessage;
		console.log(`✏️ Повідомлення змінено на: "${this.#message}"`);
	}
}

const phoneReminder = new Reminder("🔋 Постав телефон на зарядку!");

setTimeout(() => {
	phoneReminder.changeMessage("📱 Перевір заряд батареї!");
}, 4000);

setTimeout(() => {
	phoneReminder.stop();
}, 10000);