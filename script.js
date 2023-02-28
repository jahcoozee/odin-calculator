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