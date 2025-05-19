// Задача 1.
//Використовуючи один з АРІ
// https://github.com/public-apis/public-apis#animals
// та функцію fetch організувати завантаження та відображення даних
// Намагайтесь зробити це з використанням класів. Окремо клас для побудови розмітки.
// Окремо клас, який буде робити запити і повертати результати.

// fetch("https://cataas.com/cat?json=true")
// 	.then((res) => res.json())
// 	.then((data) => {

// 		console.log(data.url);
// 	})
// 	.catch((err) => console.error("Failed to load cat:", err));

class CatService {
	constructor(apiUrl, wrapper) {
		this.apiUrl = apiUrl;
		this.wrapper = wrapper;
	}

	async getRandomCatUrl() {
		try {
			const response = await fetch(this.apiUrl);
			const data = await response.json();
			new CatRender(data.url).render(this.wrapper);
		} catch (error) {
			console.error("Помилка завантаження кота:", error);
			return null;
		}
	}
}

class CatRender {
	constructor(src) {
		this.src = src;
	}
	createImg() {
		const elImg = document.createElement("img");
		elImg.setAttribute("src", this.src);
		elImg.setAttribute("alt", "image");
		return elImg;
	}
	render(wrapper) {
		wrapper.append(this.createImg());
	}
}


const wrapper = document.querySelector(".result-wrapper");
const catService = new CatService("https://cataas.com/cat?json=true", wrapper);
catService.getRandomCatUrl();