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

let numA = ""; 
let operator;
let numB = "";

const OUTPUT = document.querySelector(".output");
const DIGIT_BUTTON = document.querySelectorAll(".calc-input");
const EQUALS_BUTTON = document.querySelector(".calc-return");
const CLEAR_BUTTON = document.querySelector(".calc-clear");
const OPERATOR_BUTTON = document.querySelectorAll(".calc-operator");

function operate(numA,operator,numB) { // currently, operator must be a string
	return (
	(operator === "+") ? add(numA,numB)
	: (operator === "-") ? subtract(numA,numB)
	: (operator === "*") ? multiply(numA,numB)
	: (operator === "/") ? divide(numA,numB)
	: alert("Please enter a valid operator")
	);
}

DIGIT_BUTTON.forEach(button => { // Assign digit var and append to display
	button.addEventListener("click", e => {
		OUTPUT.textContent += e.target.textContent;
		if (!operator) {
			numA += e.target.textContent; // Define numA before operator
		} else {
			numB += e.target.textContent; // Define numB after operator
		}
	});
});

OPERATOR_BUTTON.forEach(button => { // Assign operator var and append to display
	button.addEventListener("click", e => {
		if (!operator && numA) {
			OUTPUT.textContent += e.target.textContent;
			operator = e.target.textContent;
		}
	});
});



CLEAR_BUTTON.addEventListener("click", e => {
	numA = "";
	operator = undefined;
	numB = "";
	OUTPUT.textContent = "";
});
