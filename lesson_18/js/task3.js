// Задача 3.
//Користувач задає рік народження.
// Визначити кількість років користувача.

function getUserAge() {
	const birthYear = document.getElementById("birthYear").value;
	if (birthYear && birthYear > 0) {
		const currentYear = 2025;
		const age = currentYear - birthYear;
		document.getElementById("result").innerText = age;
	}
}

document.getElementById("birthYear").onchange = getUserAge;
