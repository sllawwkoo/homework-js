// Задача 12. 
// Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. 
// Вибір у кожній позиції вибирається як одне з чотирьох зображень. 
// Вивести ці зображення і повідомити виграш користувача 
// (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн). 
// Використати цикли і switch (для вибору зображення за номером).

let winCombination = "" //переможна комбінація
let winResult //результат - виграв чи програв

for(let i = 0; i < 3; i++){
	let renderUrl = 1 + Math.floor(Math.random() * 4);
	let imgUrl;
	winCombination += renderUrl

	switch(renderUrl){
		case 1:
			imgUrl = "../img/1.webp";
			break;
		case 2:
			imgUrl = "../img/2.webp";
			break;
		case 3:
			imgUrl = "../img/3.webp";
			break;
		case 4:
			imgUrl = "../img/4.webp";
			break;
	}

	document.write(`<img src="${imgUrl}">`)
}



switch (winCombination) {
	case "111":
		winResult = "Вітаємо! Ви виграли - 100 грн"
		break;
	case "222":
		winResult = "Вітаємо! Ви виграли - 200 грн"
		break;
	case "333":
		winResult = "Вітаємо! Ви виграли - 500 грн"
		break;
	case "444":
		winResult = "Вітаємо! Ви виграли - 1000 грн"
		break;

	default:
		winResult = "Нажаль, ви не виграли."
		break;
}

document.write(`<p>${winResult}</p>`)