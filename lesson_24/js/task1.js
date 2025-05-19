// Задача 1.
//Дано клас PhoneNumber.
// Створити функцію перетворення до string,
// при якому на основі номера виводиться оператор (050….  à MTC, 096… à Kyivstar, ….)

class PhoneNumber {
	constructor(phone) {
		this.phone = phone;
	}

	getOperator() {
		const operators = {
			Kyivstar: [/^(\+?38)?0(67|68|96|97|98)\d{7}$/],
			Lifecell: [/^(\+?38)?0(63|73|93)\d{7}$/],
			Vodafone: [/^(\+?38)?0(50|66|95|99)\d{7}$/],
		};

		for (const [operator, patterns] of Object.entries(operators)) {
			if (patterns.some((pattern) => pattern.test(this.phone))) {
				return operator;
			}
		}

		return "Unknown Operator";
	}

	[Symbol.toPrimitive](hint) {
		if (hint === "string") return this.getOperator();
	}
}

const phone1 = new PhoneNumber("0961234567");
const phone2 = new PhoneNumber("+380501234567");
const phone3 = new PhoneNumber("0739876543");
const phone4 = new PhoneNumber("0391234567");


console.log(`${phone1}`); // Kyivstar
console.log(`${phone2}`); // Vodafone
console.log(`${phone3}`); // Lifecell
console.log(`${phone4}`); // Unknown Operator


function getPhoneAndOperator() {
	const wrapper = document.querySelector(".result-wrapper");

	const result = `
	<p>Номер телефону: ${phone1.phone} - Оператор: ${phone1}</p>
	<p>Номер телефону: ${phone2.phone} - Оператор: ${phone2}</p>
	<p>Номер телефону: ${phone3.phone} - Оператор: ${phone3}</p>
	<p>Номер телефону: ${phone4.phone} - Оператор: ${phone4}</p>
	`;

	wrapper.innerHTML = result;
}


getPhoneAndOperator()