// Задача 2.
// Створити службове авто (водій, марка, номер).
// Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.

class ServiceCar {
	static instance;

	constructor(driver, brand, number) {
		if (ServiceCar.instance) {
			return ServiceCar.instance;
		}

		this.driver = driver;
		this.brand = brand;
		this.number = number;

		ServiceCar.instance = this;
	}

	toString() {
		return `Водій: ${this.driver}, Марка: ${this.brand}, Номер: ${this.number}`;
	}
}


const car1 = new ServiceCar("Іван Петренко", "Toyota Camry", "AA1234BB");
console.log(car1.toString());

const car2 = new ServiceCar("Олег Коваленко", "BMW", "BB5678CC");
console.log(car2.toString());