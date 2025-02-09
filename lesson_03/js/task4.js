// Задача 4.
// З клавіатури вводиться вік людини.
// Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

// Позначення
// 	age - вік людини
//  newbornBaby
// childInKindergarten
// schoolСhild
// student
// worker
// pensioner
// highlander

if (confirm("Почати тестування?")) {
	// Введення необхідних данних

	const age = parseInt(prompt("Введіть ваш вік", "18"));
	const newbornBaby = age >= 0 && age <= 3;
	const childInKindergarten = age >= 4 && age <= 6;
	const schoolСhild = age >= 7 && age <= 17;
	const student = age >= 18 && age <= 22;
	const worker = age >= 23 && age <= 65;
	const pensioner = age >= 66 && age <= 100;

	// Обчислення та виведення результатів

	switch (true) {
		case newbornBaby:
			document.write(`
		<p>Ваш вік - ${age} роки;</p> 
		<p>Ви ще зовсім малюк!)</p>
		`);
			break;

		case childInKindergarten:
			document.write(`
		<p>Ваш вік - ${age} років;</p> 
		<p>Ви ходите до садочку!</p>
		`);
			break;

		case schoolСhild:
			document.write(`	
		<p>Ваш вік - ${age} років;</p> 
		<p>Ви ходите до школи!</p>
		`);
			break;

		case student:
			document.write(`
		<p>Ваш вік - ${age} років;</p> 
		<p>Ви студент!</p>
		`);
			break;

		case worker:
			document.write(`
		<p>Ваш вік - ${age} років;</p> 
		<p>Ви працівник!</p>
		`);
			break;

		case pensioner:
			document.write(`
		<p>Ваш вік - ${age} років;</p> 
		<p>Ви пенсіонер!</p>
		`);
			break;
		default:
			document.write(`
		<p>Вам більше ста років!!! <br> Ви напевно горець!))!</p>
		`);
			break;
	}
}
