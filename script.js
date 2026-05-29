function add(a,b) {
	return a + b;
}

function subtract(a,b) {
	return a - b;
}

function multiply(a,b) {
	return a * b;
}

function divide(a,b) {
	return a / b;
}

let numA;
let operator;
let numB;

function operate(numA,operator,numB) { // currently, operator must be a string
	return (
	(operator === "+") ? add(numA,numB)
	: (operator === "-") ? subtract(numA,numB)
	: (operator === "*") ? multiply(numA,numB)
	: (operator === "/") ? divide(numA,numB)
	: alert("Please enter a valid operator")
	);
}


function clear() {
	const output = document.querySelector(".output");
	output.textContent = "";
}
