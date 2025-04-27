// Задача 1.
// Розробити калькулятор

function calculateResult(operation) {
	const firstNumber = parseFloat(document.getElementById("firstNumber").value);
	const secondNumber = parseFloat(
		document.getElementById("secondNumber").value
	);
	if (firstNumber && secondNumber) {
		let result = operation(firstNumber, secondNumber);
		document.getElementById("result").innerText = result;
	}
}

document.getElementById("add").onclick = () => calculateResult((a, b) => a + b);
document.getElementById("subtract").onclick = () =>
	calculateResult((a, b) => a - b);
document.getElementById("multiply").onclick = () =>
	calculateResult((a, b) => a * b);
document.getElementById("divide").onclick = () =>
	calculateResult((a, b) => a / b);
