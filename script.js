// OPERATIONS FUNCTIONS
// Add operands together
function add(a, b) {
	return a + b;
}

// Subtract operands together
function subtract(a, b) {
	return a - b;
}

// Multiply operands together
function multiply(a, b) {
	return a * b;
}

// Divide operands together
function divide(a, b) {
	return b === 0 ? "LMFAO" : a / b;
}

// Operate functions based on operator function called
function operate(operator, a, b) {
	return operator(a, b);
}

// DOM MANIPULATION AND LISTENING
// Reference to the display box; append operands and operators in display
const display = document.querySelector(".display");
let displayText = document.createElement("span");

// Digits to show up in the display box
const digitButtons = document.querySelectorAll(".digit");
digitButtons.forEach(digit => digit.addEventListener("click", () => {
	displayText.textContent += digit.textContent;
	display.appendChild(displayText);
}));

// Operators to show up in the display box
const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(operator => operator.addEventListener("click", () => {
	displayText.textContent += operator.textContent;
}));

