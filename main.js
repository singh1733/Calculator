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

    const numButtons = document.querySelectorAll(".number-button");
    const numButtonArray = Array.from(numButtons);
    const display = document.querySelector("#calculator-screen");
    let numCount = 0;

    //add event listener to number buttons so that when a number is clicked,
    //it shows up on the display after the previous numbers, and if 0 is the only number there,
    //0 gets replaced by the number clicked.
    //max characters on screen is 12;

    numButtonArray.map((button) => {
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

    const clearButton = document.querySelector("#clear");
    clearButton.addEventListener("click", () => { display.textContent = "0" });




}

addEventListenersToButtons();
