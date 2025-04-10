// Задача 2.
// Розробити функцію, у яку передають об’єкт (день, місяць, рік).
// Визначити, який буде рік через N місяців.

function getYearAfterNMonths({ month, year }, numMonth) {
	return year + Math.floor((month - 1 + numMonth) / 12);
}

const date = {
	day: 10,
	month: 4,
	year: 2025
}

const amountMonth = 13
const resultYear = getYearAfterNMonths(date, amountMonth)

console.log(`Через ${amountMonth} місяців буде ${resultYear} рік`);
