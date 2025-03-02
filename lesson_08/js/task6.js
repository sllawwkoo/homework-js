"use strict";

// Задача 6.
// Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
// Приклад збереження даних
// let productsPrices = [1000, 20, 31]
// let productsTitles = [‘cheese’, ‘juice’, ‘bread’]

if (confirm("Почати тестування?")) {
	let productsPrices = [1000, 20, 31];
	let productsTitles = ["cheese", "juice", "bread"];

	const userMoney = parseInt(prompt("Введіть суму грошей"));

	function getProductsUserCanAfford(money, arrPrices, arrTitles) {
		let productsUserCanAfford = [];

		for (let i = 0; i < arrPrices.length; i++) {
			if (money >= arrPrices[i]) {
				productsUserCanAfford.push(arrTitles[i]);
				money -= arrPrices[i];
			}
		}

		return productsUserCanAfford;
	}

	const productsUserCanAfford = getProductsUserCanAfford(
		userMoney,
		productsPrices,
		productsTitles
	);

	document.write(`<p>Користувач має ${userMoney} грн.</p>`);

	if (productsUserCanAfford.length > 0) {
		document.write(
			`<p>Користувач може купити товари: ${productsUserCanAfford.join(
				", "
			)}</p>`
		);
	} else {
		document.write(`<p>Користувач не може купити жодного товару</p>`);
	}
}
