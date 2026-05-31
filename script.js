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


