// Задача 7.
// Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень 
// (шляхи до зображень передаються у функцію)

function getRandomImage(url1, url2, url3, url4) {
	let randomNumber = 1 + Math.floor(Math.random() * 4);
	let url

	switch (randomNumber) {
		case 1:
			url = url1
			break;
		case 2:
			url = url2
			break;
		case 3:
			url = url3
			break;
		case 4:
			url = url4
			break;
	}

	document.write(`<img src="${url}">`);
}

const img1 = "../img/1.webp";
const img2 = "../img/2.webp";
const img3 = "../img/3.webp";
const img4 = "../img/4.webp";

getRandomImage(img1, img2, img3, img4);