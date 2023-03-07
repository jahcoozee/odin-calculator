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

		// Evaluate most recent pair of operands if operators
		// are continuously selected
		if (operator !== null) {
			if (secondOperand === 0) {
				assignOperator();
				savedDisplay.textContent += button.textContent;
			} else {
				calculateResult();
				savedDisplay.textContent += button.textContent;
				assignOperator();
			}
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
		result = operate(operator, Number(firstOperand), Number(secondOperand));
		savedDisplay.textContent = result;
		firstOperand = result;
		secondOperand = 0;
	}
}));

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