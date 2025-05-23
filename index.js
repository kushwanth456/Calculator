let currentInput = "0";
let operator = null;
let previousInput = null;

function updateDisplay() {
    document.getElementById("display").textContent = currentInput;
}

function appendNumber(num) {
    if (currentInput === "0") {
        currentInput = num;
    } else {
        currentInput += num;
    }
    updateDisplay();
}

function appendDot() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = "0";
    operator = null;
    previousInput = null;
    updateDisplay();
}

function plusMinus() {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
}

function percent() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}

function appendOperator(op) {
    if (operator !== null) calculateResult();
    operator = op;
    previousInput = currentInput;
    currentInput = "0";
}

function calculateResult() {
    if (operator === null || previousInput === null) return;

    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    switch (operator) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "*":
            result = prev * curr;
            break;
        case "/":
            result = prev / curr;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = null;
    updateDisplay();
}
