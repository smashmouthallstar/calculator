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
let result;

const OUTPUT = document.querySelector(".output");
const DIGIT_BUTTON = document.querySelectorAll(".calc-input");
const EQUALS_BUTTON = document.querySelector(".calc-return");
const CLEAR_BUTTON = document.querySelector(".calc-clear");
const OPERATOR_BUTTON = document.querySelectorAll(".calc-operator");

function operate(numA,operator,numB) {
	numA = +numA;
	numB = +numB;
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
		if (!operator && numA) { // If numA exists but not operator, update operator
			OUTPUT.textContent += e.target.textContent;
			operator = e.target.textContent;
		} else if (operator) { // If operator exists: A = A+B, B = "", update operator
			numA = operate(numA,operator,numB);
			numB = "";
			OUTPUT.textContent = numA;
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

EQUALS_BUTTON.addEventListener("click", e => {
	if (numB === "0" && operator === "/" || numB == 0 && operator === "/") {
			alert("You cannot divide by zero.");
			return;
		}
	result = operate(numA,operator,numB);
	if (result === undefined) { // Don't update display if result is invalid
		return;
	}
	OUTPUT.textContent = result;
});
// TO DO:
// On next input, replace the output again (and delete the variables?
