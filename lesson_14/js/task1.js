// Задача 1.
// Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
// ----- Властивості ------
// -	назва компанії на час розробки (назву періодично змінюють)
// -	власник компанії
// -	споснсори (масив спонсорів)
//              * прізвище спонсора
//       * ім’я  спонсора
//       * сума вкладень спонсора
// -	рік випуску
// -	вартість сайту

const companies = [
	{
		company: "WebNova Inc.",
		owner: "Олександр Коваль",
		sponsors: [
			{ lastName: "Іваненко", firstName: "Марія", investment: 10000 },
			{ lastName: "Петренко", firstName: "Андрій", investment: 25000 },
			{ lastName: "Литвин", firstName: "Олексій", investment: 80000 },
		],
		releaseYear: 2022,
		websiteCost: 5000,
	},
	{
		company: "TechVision Ltd.",
		owner: "Наталія Сидоренко",
		sponsors: [
			{ lastName: "Шевченко", firstName: "Ірина", investment: 8000 },
			{ lastName: "Коваленко", firstName: "Олег", investment: 12000 },
			{ lastName: "Гриценко", firstName: "Максим", investment: 4000 },
			{ lastName: "Бондар", firstName: "Юлія", investment: 2000 },
		],
		releaseYear: 2005,
		websiteCost: 180000,
	},
	{
		company: "NextGen Web",
		owner: "Віктор Гуменюк",
		sponsors: [
			{ lastName: "Мельник", firstName: "Олена", investment: 9000 },
			{ lastName: "Ткаченко", firstName: "Богдан", investment: 6000 },
		],
		releaseYear: 1999,
		websiteCost: 8400,
	},
	{
		company: "DigitalCraft",
		owner: "Ірина Марчук",
		sponsors: [
			{ lastName: "Кравчук", firstName: "Руслан", investment: 11000 },
			{ lastName: "Данилюк", firstName: "Світлана", investment: 37000 },
			{ lastName: "Романюк", firstName: "Тарас", investment: 25000 },
			{ lastName: "Савчук", firstName: "Оксана", investment: 53000 },
			{ lastName: "Захарченко", firstName: "Ігор", investment: 25000 },
		],
		releaseYear: 2008,
		websiteCost: 200000,
	},
	{
		company: "BrightPixel Studio",
		owner: "Артем Ільчук",
		sponsors: [
			{ lastName: "Семенюк", firstName: "Ганна", investment: 13000 },
			{ lastName: "Юрченко", firstName: "Владислав", investment: 10000 },
			{ lastName: "Онищенко", firstName: "Дарина", investment: 6000 },
		],
		releaseYear: 2001,
		websiteCost: 160000,
	},
];

console.log("companies", companies);

// Знайти:

// 1) загальну вартість усіх сайтів

const totalCost = companies.reduce(
	(prevCost, company) => prevCost + company.websiteCost,
	0
);
console.log("totalCost = ", totalCost);

document.write(`
	<p>1. Загальну вартість усіх сайтів - <strong>${totalCost}</strong></p>
	`);

// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
const websitesCount2000to2009 = companies.reduce(
	(prevCount, company) =>
		company.releaseYear >= 2000 && company.releaseYear <= 2009
			? prevCount + 1
			: prevCount,
	0
);

console.log("websitesCount2000to2009 - ", websitesCount2000to2009);
document.write(`
	<p>2. Кількість сайтів, що було зроблено між 2000 та 2009 рр. - <strong>${websitesCount2000to2009}</strong></p>
	`);

// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
const websitesWithSponsorshipOver100k = companies.reduce(
	(prevCount, company) => {
		const totalInvestment = company.sponsors.reduce(
			(sumPrev, sponsor) => sumPrev + sponsor.investment,
			0
		);
		return totalInvestment > 100000 ? prevCount + 1 : prevCount;
	},
	0
);

console.log(
	"websitesWithSponsorshipOver100k - ",
	websitesWithSponsorshipOver100k
);

document.write(`
	<p>3. Кількість сайтів, де сума спонсорських вкладень була більшою за 100000 - <strong>${websitesWithSponsorshipOver100k}</strong></p>
	`);

// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
const totalSponsorsList = companies.reduce(
	(list, company) => list.concat(company.sponsors),
	[]
);
console.log("Cписок усіх спонсорів");
console.table(totalSponsorsList);

document.write(`
	<p>34 Загальний список усіх спонсорів: <br >${JSON.stringify(
		totalSponsorsList
	)}</p>
	`);

// 5) знайти рік, коли прибуток був найбільшим
let maxCost = 0,
	maxCostYear;

for (const company of companies) {
	if (company.websiteCost > maxCost) {
		maxCost = company.websiteCost;
		maxCostYear = company.releaseYear;
	}
}

document.write(`
	<p>34 Набфльший прибуток був <strong>${maxCost}</strong> у <strong>${maxCostYear}</strong> році </p>
	`);

// 6) упорядкувати список за спаданням прибутку
companies.sort((a, b) => b.websiteCost - a.websiteCost);

console.log("Cписок за спаданням прибутку");
console.table(companies);

// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000

function splitByWebsiteCost(companies, threshold) {
	const underOrEqual = [];
	const over = [];

	for (const company of companies) {
		const companyCopy = JSON.parse(JSON.stringify(company));

		if (companyCopy.websiteCost <= threshold) {
			underOrEqual.push(companyCopy);
		} else {
			over.push(companyCopy);
		}
	}

	return [ underOrEqual, over ];
}

const [min100, max100] = splitByWebsiteCost(companies, 10000)

console.log('Вартість меньша 10000');
console.table(min100);

console.log("Вартість більша 10000");
console.table(max100);