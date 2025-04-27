"use strict";

// Задача 2.
// Зробити конвертер валют (курси валют – константи у скрипті).

const EXCHANGE_RATE = {
	USD: 41,
	EUR: 46,
};

function convertCurrency(currency, amountUAH) {
	return (amountUAH / EXCHANGE_RATE[currency]).toFixed(2);
}

const grnNumber = document.querySelector("#grnNumber");
const resultEuro = document.querySelector("#resultEuro");
const resultUsd = document.querySelector("#resultUsd");

document.querySelector("#convert").onclick = () => {
	if (!grnNumber.value) {
		resultEuro.innerText = "";
		resultUsd.innerText = "";
	} else {
		resultEuro.innerText = convertCurrency("EUR", grnNumber.value) + " EUR";
		resultUsd.innerText = convertCurrency("USD", grnNumber.value) + " USD";
	}
};
