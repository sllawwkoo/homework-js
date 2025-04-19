// Задача 3.
//Задача 3. Об’єкт “Фірма” (використати члени-класи)
// поля
// ▪	назва фірми;
// ▪	дата заснування (рік, місяць);
// ▪	послуги (назва послуги, вартість, термін виконання);
// ▪	адреси філіалів (країна, місто, вулиця, номер будинку);
// методи
// ▪	визначення кількості років існування фірми;
// ▪	виведення всіх філіалів фірми у вказаному місті;
// ▪	виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;

// Клас Послуга
class Service {
	#name;
	#price;
	#durationDays;

	constructor(name, price, durationDays) {
		this.Name = name;
		this.Price = price;
		this.DurationDays = durationDays;
	}

	get Name() {
		return this.#name;
	}

	set Name(newName) {
		if (newName === "")
			throw new Error("Назва помлуги не повинна бути порожня!");
		this.#name = newName;
	}

	get Price() {
		return this.#price;
	}

	set Price(newPrice) {
		if (newPrice < 0)
			throw new Error("Вартість послуги не може бути меншою за 0!");
		this.#price = newPrice;
	}

	get DurationDays() {
		return this.#durationDays;
	}

	set DurationDays(newDurationDays) {
		if (newDurationDays < 0)
			throw new Error("Термін не може бути меншим за 0!");
		this.#durationDays = newDurationDays;
	}

	toString() {
		return `${this.Name} - ${this.Price} грн, термін: ${this.DurationDays} дн.`;
	}
}

// Клас Філія
class Branch {
	#country;
	#city;
	#street;
	#buildingNumber;

	constructor(country, city, street, buildingNumber) {
		this.Country = country;
		this.City = city;
		this.Street = street;
		this.BuildingNumber = buildingNumber;
	}

	get Country() {
		return this.#country;
	}

	set Country(newCountry) {
		if (newCountry === "")
			throw new Error("Назва країни не повинна бути порожня!");

		this.#country = newCountry;
	}

	get City() {
		return this.#city;
	}

	set City(newCity) {
		if (newCity === "") throw new Error("Назва міста не повинна бути порожня!");

		this.#city = newCity;
	}

	get Street() {
		return this.#street;
	}

	set Street(newStreet) {
		if (newStreet === "")
			throw new Error("Назва вулиці не повинна бути порожня!");

		this.#street = newStreet;
	}

	get BuildingNumber() {
		return this.#buildingNumber;
	}

	set BuildingNumber(newBuildingNumber) {
		if (newBuildingNumber < 1)
			throw new Error("Номер будинку не може бути меншим за 1!");

		this.#buildingNumber = newBuildingNumber;
	}

	toString() {
		return `${this.Country}, м. ${this.City}, вул. ${this.Street}, буд. ${this.BuildingNumber}`;
	}
}

// Головний клас Фірма
class Company {
	#name;
	#foundationYear;
	#foundationMonth;

	constructor(name, foundationYear, foundationMonth) {
		this.Name = name;
		this.FoundationYear = foundationYear;
		this.FoundationMonth = foundationMonth;
		this.services = [];
		this.branches = [];
	}

	get Name() {
		return this.#name;
	}

	set Name(newName) {
		if (newName === "") throw new Error("Назва фірми не повинна бути порожня!");

		this.#name = newName;
	}

	get FoundationYear() {
		return this.#foundationYear;
	}

	set FoundationYear(newFoundationYear) {
		if (newFoundationYear < 1) throw new Error("Рік не може бути меншим за 1!");

		this.#foundationYear = newFoundationYear;
	}

	get FoundationMonth() {
		return this.#foundationMonth;
	}

	set FoundationMonth(newFoundationMonth) {
		if (newFoundationMonth < 1 || newFoundationMonth > 12)
			throw new Error("Місяць не може бути меншим за 1 або більшим за 12!");

		this.#foundationMonth = newFoundationMonth;
	}

	// Додати послугу
	addService(service) {
		this.services.push(service);
	}

	// Додати філіал
	addBranch(branch) {
		this.branches.push(branch);
	}

	// Кількість років існування фірми
	getCompanyAge() {
		const now = new Date();
		let age = now.getFullYear() - this.FoundationYear;
		if (now.getMonth() + 1 < this.FoundationMonth) {
			age -= 1;
		}
		return age;
	}

	// Вивести філії у вказаному місті
	printBranchesInCity(city) {
		const branchesInCity = this.branches.filter(
			(branch) => branch.City === city
		);

		if (branchesInCity.length === 0) {
			console.log(`Філій у місті ${city} не знайдено.`);
			return;
		}

		console.log(`Філії у місті ${city}:`);
		branchesInCity.forEach((branch) => console.log(branch.toString()));
	}

	// Послуги, які можна виконати за вказану суму і термін
	printAvailableServices(maxPrice, maxDays) {
		const available = this.services.filter(
			(service) => service.Price <= maxPrice && service.DurationDays <= maxDays
		);

		if (available.length === 0) {
			console.log(`Немає послуг до ${maxPrice} грн і ${maxDays} днів.`);
			return;
		}

		console.log(`Послуги до ${maxPrice} грн і ${maxDays} днів:`);
		available.forEach((service) => console.log(service.toString()));
	}

	// Інформація про компанію
	toString() {
		return `Фірма: ${this.Name}, заснована: ${this.FoundationMonth}/${
			this.FoundationYear
		}, вік: ${this.getCompanyAge()} років`;
	}
}

const buildCompany = new Company("БудМайстер", 2010, 3);

console.log(buildCompany);

// Додаємо філії
buildCompany.addBranch(new Branch("Україна", "Київ", "Будівельна", 15));
buildCompany.addBranch(new Branch("Україна", "Львів", "Архітекторська", 8));
buildCompany.addBranch(new Branch("Україна", "Одеса", "Приморська", 21));
buildCompany.addBranch(new Branch("Україна", "Харків", "Індустріальна", 12));
buildCompany.addBranch(new Branch("Україна", "Дніпро", "Миру", 7));
buildCompany.addBranch(new Branch("Україна", "Київ", "Соборна", 19));
buildCompany.addBranch(new Branch("Україна", "Київ", "Будівельників", 4));
buildCompany.addBranch(new Branch("Україна", "Львів", "Галицька", 2));
buildCompany.addBranch(new Branch("Україна", "Ужгород", "Незалежності", 10));
buildCompany.addBranch(new Branch("Україна", "Ужгород", "Карпатська", 6));

// Додаємо послуги
buildCompany.addService(
	new Service("Будівництво приватного будинку", 800000, 90)
);
buildCompany.addService(new Service("Ремонт квартири під ключ", 250000, 30));
buildCompany.addService(new Service("Утеплення фасаду", 60000, 7));
buildCompany.addService(new Service("Заливка фундаменту", 120000, 10));
buildCompany.addService(new Service("Монтаж даху", 95000, 6));
buildCompany.addService(new Service("Прокладання електрики", 45000, 4));
buildCompany.addService(new Service("Штукатурні роботи", 30000, 3));
buildCompany.addService(new Service("Укладання плитки", 28000, 2));
buildCompany.addService(new Service("Встановлення вікон", 15000, 1));
buildCompany.addService(new Service("Дизайн інтер'єру", 70000, 5));

// Інформація про компанію
console.log(buildCompany.toString());

// Виводимо філії у місті Київ
buildCompany.printBranchesInCity("Київ");

// Послуги до 80 000 грн і до 7 днів
buildCompany.printAvailableServices(80000, 7);
