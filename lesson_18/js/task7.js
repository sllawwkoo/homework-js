// Задача 4.
// Подорож складається з 3 етапів.
// На кожному етапі користувач може вибрати один з видів транспорту
// (авто, автобус, літак - випадаючий список),
// харчування (сніданок, обід, вечеря – checkbоx)
// та одного з 3-х гідів(використати  - radio buttons).
// Ціни визначте самі. Підрахувати загальну вартість.

function grtTotalSum() {
	let totalSum = 0;

	const selectList = document.querySelectorAll(".travel__select");
	if (selectList.length > 0) {
		for (const select of selectList) {
			totalSum += parseFloat(select.value);
		}
	}

	const checkList = document.querySelectorAll(".travel__check input");
	if (checkList.length > 0) {
		for (const check of checkList) {
			if (check.checked) {
				totalSum += parseFloat(check.value);
			}
		}
	}

	const radioList = document.querySelectorAll(".travel__radio input");
	if (radioList.length > 0) {
		for (const radio of radioList) {
			if (radio.checked) {
				totalSum += parseFloat(radio.value);
			}
		}
	}

	const result = document.getElementById("result");
	if (result) {
		result.innerText = `${totalSum} грн.`;
	}
}

document.querySelector(".travel__button").onclick = grtTotalSum;
