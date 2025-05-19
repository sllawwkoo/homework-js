// Задача 8.
// Дано масив показів температур. Підрахувати кількість входжень кожного із показів
//let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
//Заокруглити вверх значення та підрахувати кількість різних показів.

function getCountsTemeratures(data) {
	const map = new Map();

	for (const temp of data) {
		map.set(temp, (map.get(temp) || 0) + 1);
	}

	return map;
}

function getUniqueCount(data) {
	const roundedTemps = data.map((temp) => Math.ceil(temp));
	const unique = new Set(roundedTemps);
	return unique.size;
}

function createdElement(parent, text) {
	const createdElement = document.createElement("p");
	createdElement.textContent = text;
	parent.appendChild(createdElement);
}

const wrapper = document.querySelector(".result-wrapper");

let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9];

const counts = getCountsTemeratures(temperatures);
const unique = getUniqueCount(temperatures);

for (const [temp, count] of counts) {
	const createdElement = document.createElement("p");
	createdElement.textContent = `${temp}°C → ${count} `;
	wrapper.appendChild(createdElement);
}

createdElement(wrapper, `Кількість різних показів: ${unique}`);
