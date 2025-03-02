// Задача 7.
//Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// 1)	за весь рік;
// 2)	у першій половині року;
// 3)	у другій половині року;
// 4)	за літо;
// 5)	за ІІ квартал;
// 6)	за парні місяці (з парними номерами);
// 7)	за місяці, які є початковими у сезоні (весна, літо, осінь, зима).

function getTotalSumMoney(arr, startIndex, endIndex, step = 1) {
	let sum = 0;

	for (let i = startIndex - 1; i < endIndex; i += step) {
		sum += arr[i];
	}

	return sum;
}

const arrMoney = [
	100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200,
];

const totalForYear = getTotalSumMoney(arrMoney, 1, 12);
const firstHalfOfYear = getTotalSumMoney(arrMoney, 1, 6);
const secondHalfOfYear = getTotalSumMoney(arrMoney, 7, 12);
const summerTotal = getTotalSumMoney(arrMoney, 6, 8);
const secondQuarterTotal = getTotalSumMoney(arrMoney, 4, 6);
const evenMonthTotal = getTotalSumMoney(arrMoney, 2, 12, 2);
const seasonStartMonthsTotal = getTotalSumMoney(arrMoney, 3, 12, 3);

document.write(`
<p>Дано послідовність платіжок протягом року: ${arrMoney}</p>
<p>За весь рік - ${totalForYear}</p>
<p>У першій половині року - ${firstHalfOfYear}</p>
<p>У другій половині року - ${secondHalfOfYear}</p>
<p>За літо - ${summerTotal}</p>
<p>За ІІ квартал - ${secondQuarterTotal}</p>
<p>За парні місяці - ${evenMonthTotal}</p>
<p>За місяці, які є початковими у сезоні - ${seasonStartMonthsTotal}</p>
`);
