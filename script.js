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
const currentDisplay = document.querySelector(".current-display");
const savedDisplay = document.querySelector(".saved-display");
const buttons = document.querySelectorAll(".buttons-container > button");
const clearButton = document.querySelector(".clear");

// Store button inputs into variables
let firstOperand = 0;
let secondOperand = 0;
let result = 0;
let operator = null;

// Operators and operands logic
buttons.forEach(button => button.addEventListener("click", () => {

	// Push digits to display
	if (button.className === "digit") {
		if (operator === null) {
			currentDisplay.textContent += button.textContent;
			firstOperand = currentDisplay.textContent;
		} else {
			currentDisplay.textContent += button.textContent;
			secondOperand = currentDisplay.textContent;
		}
	}

	// Push operators to display
	if (button.className === "operator") {
		// Evaluate most recent pair of operands if operators are continuously selected
		if (operator !== null) {
			if (secondOperand === 0) {
				assignOperator();
				savedDisplay.textContent += button.textContent;
			} else {
				calculateResult();
				savedDisplay.textContent += button.textContent;
				assignOperator();
			}

			// Change operator upon wrong selection
			savedDisplay.textContent = firstOperand + button.textContent;
		} else if (result === 0) {
			assignOperator();
			savedDisplay.textContent += button.textContent;
		} else {
			savedDisplay.textContent += button.textContent;
			assignOperator();
		}
	}

	// Evaluate current operands stored if upon = sign being pressed
	if (button.className === "evaluate") {
		calculateResult();
	}

	// Assign correct operator based on button selected
	function assignOperator() {
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

	// Updates saved display after each button input or calculation
	function updateSavedDisplay() {
		savedDisplay.textContent += currentDisplay.textContent;
		currentDisplay.textContent = "";
	}

	// Calculate the result of the current operands and operator saved and push to display
	function calculateResult() {
		currentDisplay.textContent = "";
		result = roundResult(operate(operator, Number(firstOperand), Number(secondOperand)));
		savedDisplay.textContent = result;
		firstOperand = result;
		secondOperand = 0;
	}

	// Rounds calculations with long decimals
	function roundResult(result) {
		return +(Math.round(result + "e+10")  + "e-10");
	}
}));

// Clear button logic
clearButton.addEventListener("click", () => {
	currentDisplay.textContent = "";
	savedDisplay.textContent = "";
	firstOperand = 0;
	secondOperand = 0;
	result = 0;
	operator = null;
});