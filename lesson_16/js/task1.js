// Задача 1.
// Створити клас TDate для роботи із датами у форматі “день.місяць.рік”.
// Дата представляється структурою із трьома полями.
// Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років.
// Введення та виведення дати реалізувати за допомогою методу  toString.

class TDate {
	#year;
	#month;
	#day;

	constructor(inittialYear, initialMonth, initialDay) {
		this.Year = inittialYear;
		this.Month = initialMonth;
		this.Day = initialDay;
	}

	#validateLastDayInMonth() {
		if (this.Day > this.getDaysOnMonth()) this.Day = this.getDaysOnMonth();
	}

	isLeapYear() {
		return (
			(this.Year % 4 === 0 && this.Year % 100 !== 0) || this.Year % 400 === 0
		);
	}

	getDaysOnMonth() {
		if (this.Month === 2) {
			return this.isLeapYear() ? 29 : 28;
		} else if ([4, 6, 9, 11].includes(this.Month)) {
			return 30;
		} else {
			return 31;
		}
	}

	get Year() {
		return this.#year;
	}

	set Year(newYear) {
		if (newYear < 1) throw new Error("Рік повинен бути більшою за 0!");

		this.#year = newYear;
	}

	get Month() {
		return this.#month;
	}

	set Month(newMonth) {
		if (newMonth < 1 || newMonth > 12)
			throw new Error("Місяць повинен бути від 1 до 12!");

		this.#month = newMonth;
	}

	get Day() {
		return this.#day;
	}

	set Day(newDay) {
		if (newDay < 1 || newDay > this.getDaysOnMonth())
			throw new Error(
				`День поточного місяця повинен бути від 1 до ${this.getDaysOnMonth()}!`
			);

		this.#day = newDay;
	}

	increaseYear(numYear) {
		if (numYear < 0) throw new Error("Кількість років має бути більшою за 0!");

		this.Year += numYear;
		this.#validateLastDayInMonth();
	}

	decreaseYear(numYear) {
		if (numYear < 0) throw new Error("Кількість років має бути більшою за 0!");

		this.Year -= numYear;
		this.#validateLastDayInMonth();
	}

	increaseMonth(numMonth) {
		if (numMonth < 0)
			throw new Error("Кількість місяців має бути більшою за 0!");

		let newMonth = this.Month + numMonth;
		if (newMonth > 12) {
			this.increaseYear(1);
			newMonth = newMonth - 12;
		}

		this.Month = newMonth;

		this.#validateLastDayInMonth();
	}

	decreaseMonth(numMonth) {
		if (numMonth < 0)
			throw new Error("Кількість місяців має бути більшою за 0!");

		let newMonth = this.Month - numMonth;
		if (newMonth < 1) {
			this.decreaseYear(1);
			newMonth = newMonth + 12;
		}

		this.Month = newMonth;

		this.#validateLastDayInMonth();
	}

	increaseDay(numDay) {
		if (numDay < 0) throw new Error("Кількість днів має бути більшою за 0!");

		let newDay = this.Day + numDay;
		if (newDay > this.getDaysOnMonth()) {
			newDay = newDay - this.getDaysOnMonth();
			this.increaseMonth(1);
		}

		this.Day = newDay;
	}

	decreaseDay(numDay) {
		if (numDay < 0) throw new Error("Кількість днів має бути більшою за 0!");

		let newDay = this.Day - numDay;
		if (newDay < 1) {
			this.decreaseMonth(1);
			newDay = newDay + this.getDaysOnMonth();
		}

		this.Day = newDay;
	}

	toString() {
		const d = String(this.Day).padStart(2, "0");
		const m = String(this.Month).padStart(2, "0");
		const y = this.Year;
		return `${d}.${m}.${y}`;
	}
}

const date1 = new TDate(2020, 2, 29);
console.log(date1.toString()); //29.02.2020

date1.increaseYear(3);
console.log(date1.toString()); //28.02.2023

date1.decreaseYear(7);
console.log(date1.toString()); //28.02.2016

date1.increaseMonth(5);
console.log(date1.toString()); //28.07.2016

date1.decreaseMonth(8);
console.log(date1.toString()); //28.11.2015

date1.increaseDay(5);
console.log(date1.toString()); //03.12.2015

date1.decreaseDay(3);
console.log(date1.toString()); //30.11.2015
