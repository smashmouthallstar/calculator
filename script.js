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
const DECIMAL_BUTTON = document.querySelector(".calc-decimal");
const BACK_BUTTON = document.querySelector(".calc-back");
const ALL_BUTTONS = document.querySelectorAll("button");

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

function isDisplayDemo() {
	if (OUTPUT.textContent === "Calculate!") {
		return true;
	}
}

function resetVariables() {
	numA = "";
	numB = "";
	operator = undefined;
	result = undefined;
}

DIGIT_BUTTON.forEach(button => { // Assign digit var and append to display
	button.addEventListener("click", e => {
		if (result || isDisplayDemo()) { // if there's a result when clicking digit, reset everything and set output to none
			OUTPUT.textContent = "";
			resetVariables();
		}

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
		} else if (result) {
			numA = result;
			numB = "";
			result = undefined;
			OUTPUT.textContent = numA;
			OUTPUT.textContent += e.target.textContent;
			operator = e.target.textContent;
		} else if (operator && numB) { // If operator and numB exists, numA gets result value and numB is reinitialized
			numA = operate(numA,operator,numB);
			numB = "";
			OUTPUT.textContent = numA;
			OUTPUT.textContent += e.target.textContent;
			operator = e.target.textContent;
		}
	});
});

DECIMAL_BUTTON.addEventListener("click", e => {
	if (result || isDisplayDemo()) { // if there's a result when clicking digit, reset everything and set output to none
		OUTPUT.textContent = "";
		resetVariables();
	}

	if (!operator) {
		if (numA.includes(".")) { // Define numA before operator
			return;
		} else {
			numA += e.target.textContent;
			OUTPUT.textContent += e.target.textContent;
		}

	} else {
		if (numB.includes(".")) {  // Define numB after operator
			return;
		} else {
			numB += e.target.textContent;
			OUTPUT.textContent += e.target.textContent;
		}
	}
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
	if (String(result).includes(".")) {
		OUTPUT.textContent = Number.parseFloat(result).toFixed(2); // Truncate to 2 decimal places max
	} else OUTPUT.textContent = result;
});

ALL_BUTTONS.forEach(button => { // Keyboard support
	document.addEventListener("keydown", e => { // Document event listener provides location agnostic keyboard support
		if (e.key === button.textContent) button.click();
		if (e.key === "Enter" && button.textContent === "=") {
			e.preventDefault(); // Prevent entering a number with enter key
			button.click();
		}
		if (e.key === "Backspace" && button.textContent === "<=") button.click();
		if (e.key === "Escape" && button.textContent === "Clear") button.click();
	});
});

BACK_BUTTON.addEventListener("click", e => {
	if (result || isDisplayDemo()) { // if there's a result when clicking digit, reset everything and set output to none
		OUTPUT.textContent = "";
		resetVariables();
	}
	if (!operator && numA) {
		// Delete one digit from numA
		numA = String(numA).slice(0, -1);
		OUTPUT.textContent = numA;
	} else if (operator && numB) {
		// Delete one value from numB
		numB = numB.slice(0, -1);
		OUTPUT.textContent = `${numA} ${operator} ${numB}`;
	} else if (numA && operator && !numB) {
		// Delete the operator
		operator = undefined;
		OUTPUT.textContent = numA;
	}
});
