"use strict";

// Задача 8.
// Створити функцію, яка виводить банер
// (у функцію передаються: зображення, заголовок та посилання, 
// куди переходимо при кліку на зображення
// (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>

function getBanner(url, title, link) {
	document.write(`<a href="${link}" target="_blank"><h3>${title}</h3><img src="${url}" ></a>`);
}

const img1 = "../img/fls.webp";
const title1 = "Живи, а працюй у вільний час";
const link1 = "https://fls.guru/";

getBanner(img1, title1, link1);