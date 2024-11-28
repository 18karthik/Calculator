// script.js
let currentInput = "";
let previousInput = "";
let operation = null;

const display = document.getElementById("display");

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function setOperation(op) {
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculate();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculate() {
    if (operation === null || currentInput === "") return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operation) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            if (current === 0) {
                result = "Error";
            } else {
                result = prev / current;
            }
            break;
        default:
            return;
    }

    display.value = result;
    currentInput = result.toString();
    operation = null;
    previousInput = "";
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operation = null;
    display.value = "";
}
