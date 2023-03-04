// OPERATION FUNCTIONS
// Add operands together
const add = function (a, b) {
	return a + b;
}

// Subtract operands together
const subtract = function (a, b) {
	return a - b;
}

// Multiply operands together
const multiply = function (a, b) {
	return a * b;
}

// Divide operands together
const divide = function (a, b) {
	return b === 0 ? "LMFAO" : a / b;
}

// Operate functions based on operator function called
const operate = function (operator, a, b) {
	return operator(a, b);
}

// DOM MANIPULATION AND EVENTS
// Get reference to display element to populate with button inputs
const currentDisplay = document.querySelector(".currentDisplay");
const savedDisplay = document.querySelector(".savedDisplay");

// Store button inputs into variables
let firstOperand = 0;
let secondOperand = 0;
let result = 0;
let operator = null;

// Operators and operands logic
const buttons = document.querySelectorAll(".buttons-container > button");
buttons.forEach(button => button.addEventListener("click", () => {

	// Save second operand and operate
	if (button.className === "evaluate") {

		// Show result
		secondOperand = currentDisplay.textContent;
		result = operate(operator, Number(firstOperand), Number(secondOperand));
		savedDisplay.textContent = result;

		// Reassign variables for further expressions
		firstOperand = result;
		secondOperand = 0;
	}

	// Store the first operand into a variable when an operator is selected
	if (button.className === "operator") {
		firstOperand = currentDisplay.textContent;
	}

	// Display operands
	if (button.className === "digit" && currentDisplay.textContent == 0) {
		currentDisplay.textContent = button.textContent;
	} else if (button.className === "evaluate") {
		currentDisplay.textContent = "";
	} else {
		currentDisplay.textContent += button.textContent;
	}

	// Assign correct function based on operator selected
	if (button.className === "operator") {
		if (button.textContent === "+") {
			updateSavedDisplay();
			operator = add;
		}
		
		if (button.textContent === "-") {
			updateSavedDisplay();
			operator = subtract;
		}
		
		if (button.textContent === "*") {
			updateSavedDisplay();
			operator = multiply;
		}
		
		if (button.textContent === "/") {
			updateSavedDisplay();
			operator = divide;
		}
	}
}));

function updateSavedDisplay() {
	savedDisplay.textContent = currentDisplay.textContent;
	currentDisplay.textContent = 0;
}

// Clear button logic
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
	currentDisplay.textContent = "";
	savedDisplay.textContent = "";
	firstOperand = 0;
	secondOperand = 0;
	result = 0;
	operator = null;
});