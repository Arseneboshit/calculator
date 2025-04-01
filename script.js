let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let shouldResetDisplay = false;

function updateDisplay(value) {
    document.getElementById("start").innerText = value;
}

function handleNumberClick(number) {
    if (shouldResetDisplay) {
        firstNumber = number;
        shouldResetDisplay = false;
    } else {
        firstNumber += number;
    }
    updateDisplay(firstNumber);
}

function handleOperatorClick(operator) {
    if (firstNumber === "") return;
    currentOperator = operator;
    secondNumber = firstNumber;
    firstNumber = "";
    updateDisplay(operator);
}

function operate(operator, a, b) {
    switch (operator) {
        case '+': return parseFloat(a) + parseFloat(b);
        case '-': return parseFloat(a) - parseFloat(b);
        case '*': return parseFloat(a) * parseFloat(b);
        case '%': return (a * (b / 100)).toString();
        case '/': 
            if (b === "0") return "erorr";
            return parseFloat(a) / parseFloat(b);
        default: return "unknown";
    }
}

document.getElementById("one").addEventListener("click", () => handleNumberClick("1"));
document.getElementById("two").addEventListener("click", () => handleNumberClick("2"));
document.getElementById("three").addEventListener("click", () => handleNumberClick("3"));
document.getElementById("four").addEventListener("click", () => handleNumberClick("4"));
document.getElementById("five").addEventListener("click", () => handleNumberClick("5"));
document.getElementById("six").addEventListener("click", () => handleNumberClick("6"));
document.getElementById("seven").addEventListener("click", () => handleNumberClick("7"));
document.getElementById("eight").addEventListener("click", () => handleNumberClick("8"));
document.getElementById("nine").addEventListener("click", () => handleNumberClick("9"));
document.getElementById("zero").addEventListener("click", () => handleNumberClick("0"));
document.getElementById("double_zero").addEventListener("click", () => handleNumberClick("00"));

document.getElementById("add").addEventListener("click", () => handleOperatorClick("+"));
document.getElementById("subtract").addEventListener("click", () => handleOperatorClick("-"));
document.getElementById("multiply").addEventListener("click", () => handleOperatorClick("*"));
document.getElementById("divine").addEventListener("click", () => handleOperatorClick("/"));

document.getElementById("equals").addEventListener("click", () => {
    if (firstNumber && secondNumber && currentOperator) {
        let result = operate(currentOperator, secondNumber, firstNumber);
        updateDisplay(result);
        firstNumber = result;
        secondNumber = "";
        currentOperator = null;
        shouldResetDisplay = true;
    }
});

document.getElementById("AC").addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    currentOperator = null;
    updateDisplay("0");
});

document.getElementById("point").addEventListener("click", () => {
    if (!firstNumber.includes(".")) {
        firstNumber += ".";
        updateDisplay(firstNumber);
    }
});

document.getElementById("backspace").addEventListener("click", () => {
    firstNumber = firstNumber.slice(0, -1);
    updateDisplay(firstNumber || "0");
});


document.getElementById("perc").addEventListener("click", () => {
    if (firstNumber === "") return;
    currentOperator = "%";
    secondNumber = firstNumber;
    firstNumber = "";
    updateDisplay("%");
});

document.getElementById("equals").addEventListener("click", () => {
    if (firstNumber && secondNumber && currentOperator) {
        let result;
        if (currentOperator === "%") {
            result = (parseFloat(secondNumber) * (parseFloat(firstNumber) / 100)).toString();
        } else {
            result = operate(currentOperator, secondNumber, firstNumber);
        }
        updateDisplay(result);
        firstNumber = result;
        secondNumber = "";
        currentOperator = null;
        shouldResetDisplay = true;
    }
});