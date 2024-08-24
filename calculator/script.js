
let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperator(operator) {
    if (currentOperator !== null) calculateResult();
    firstOperand = displayValue;
    currentOperator = operator;
    displayValue = '';
}

function calculateResult() {
    if (currentOperator === null || displayValue === '') return;
    secondOperand = displayValue;
    displayValue = String(operate(firstOperand, secondOperand, currentOperator));
    firstOperand = displayValue;
    currentOperator = null;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function operate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) return 'Error';
            return a / b;
        default:
            return null;
    }
}