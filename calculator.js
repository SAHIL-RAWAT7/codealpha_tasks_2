let displayValue = '';
let operator = '';
let currentValue = '';
let previousValue = '';

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(op) {
    if (displayValue === '') return; // Prevent entering operator first
    previousValue = displayValue;
    operator = op;
    displayValue = ''; // Reset display for new value
}

function clearDisplay() {
    displayValue = '';
    operator = '';
    previousValue = '';
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function appendDot() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

function calculate() {
    if (previousValue === '' || displayValue === '') return;
    let result;
    const prev = parseFloat(previousValue);
    const current = parseFloat(displayValue);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    displayValue = result.toString();
    operator = '';
    previousValue = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
