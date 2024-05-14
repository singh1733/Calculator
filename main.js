function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let num1, num2, operator, result;

function operate(num1, num2, operator) {
    if (operator == "/") {
        result = divide(num1, num2);
    } else if (operator == "*") {
        result = multiply(num1, num2);
    } else if (operator == "+") {
        result = add(num1, num2);
    } else if (operator == "-") {
        result = subtract(num1, num2);
    }
}

function addEventListenersToButtons() {

    const buttons = document.querySelectorAll(".number-button");
    const buttonArray = Array.from(buttons);
    const display = document.querySelector("#calculator-screen");
    let numCount = 0;

    buttonArray.map((button) => {
        button.addEventListener("click", () => {
            if (numCount != 12) {
                if (display.textContent === "0") {
                    display.textContent = "";
                }
                display.textContent += button.textContent;
                numCount++;
            }
        });
    });


}

addEventListenersToButtons();
