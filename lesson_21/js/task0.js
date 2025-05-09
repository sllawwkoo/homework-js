// Задача 0.
//Розробити клас Person (поля:ім'я, вік, адреса; методи: toString, визначення року народження).
// На основі класу Person  розробити клас Worker
// (додати поля: посада, розмір заробітної плати, кількість відсотів оподаткування;
// методи:визначення кількості виплачених коштів за рік, та визначення розміру податків)

class Person {
	constructor(name, age, address) {
		this.name = name;
		this.age = age;
		this.address = address;
	}

	getYearOfBirth() {
		return new Date().getFullYear() - this.age;
	}

	toString() {
		return `Працівник: ${this.name},<br> Адреса: ${
			this.address
		},<br> Рік народження: ${this.getYearOfBirth()},<br> Вік: ${this.age} років <br>`;
	}
}

class Worker extends Person {
	constructor(name, age, address, position, salary, tax) {
		super(name, age, address);
		this.position = position;
		this.salary = salary;
		this.tax = tax;
	}
	getYearlySalary() {
		return this.salary * 12;
	}
	getTax() {
		return this.getYearlySalary() * this.tax / 100;
	}

	toString() {
		return super.toString() +
			`Посада: ${this.position}, <br> Річна зарплата: ${this.getYearlySalary()} грн, <br> Податок за рік: ${this.getTax()} грн`;
	}
}


const worker1 = new Worker("Іван Петренко", 25, "Київ, вул. Грушевсього 1", "Директор", 10000, 20);
console.log(worker1.toString());

const wrapper = document.querySelector(".result-wrapper");
wrapper.innerHTML = worker1.toString();