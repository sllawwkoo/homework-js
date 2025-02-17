// Задача 7.
// Вивести на екран N абзаців (N вводиться користувачем) за зразком:

// кількість абзаців numberOfParagraphs вводиться користувачем

if (confirm("Почати тестування?")) {
	const numberOfParagraphs = prompt("Введіть кількість абзаців:", "4");

	for (let i = 1; i <= numberOfParagraphs; i++) {
		document.write(`<h2 >Заголовок ${i}</h2>`);
		for (let j = 1; j <= i; j++) {
			document.write(`<p>Розділ ${i}, параграф ${j}</p>`);
		}
		document.write(`<hr>`);
	}
}
