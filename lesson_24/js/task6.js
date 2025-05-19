// Задача 6.
// Дано інформацію про відвідувачів деякого сайту
// (для кожного відвідувача зберігається логін).
// Підрахувати для кожного клієнта кількість відвідувань.

function getVisitCountByUser(logins) {
	const visitMap = new Map();

	for (const login of logins) {
		const count = visitMap.get(login) || 0;
		visitMap.set(login, count + 1);
	}

	return visitMap;
}

const visitors = [
	"ivan23",
	"maria_k",
	"pavlo1990",
	"ivan23",
	"maria_k",
	"oleg_olegovich",
	"maria_k",
	"pavlo1990",
	"ivan23",
	"katya_new",
];

const wrapper = document.querySelector(".result-wrapper");

const visitStats = getVisitCountByUser(visitors);

for (const [login, count] of visitStats) {
	const createdElement = document.createElement("p");
	createdElement.textContent = `${login}: ${count}`;
	wrapper.appendChild(createdElement);
}
