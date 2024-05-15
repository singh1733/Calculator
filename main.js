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
        return divide(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    } else if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else {
        return num2;
    }
}

function buttonSwitch(divideButton, multiplyButton, addButton, subtractButton) {
    divideButton.style.backgroundColor = "#add7e6";
    multiplyButton.style.backgroundColor = "#add7e6";
    addButton.style.backgroundColor = "#add7e6"
    subtractButton.style.backgroundColor = "#add7e6"
    return;
}

function addEventListenersToButtons() {

    const allButtons = document.querySelectorAll(".button");
    const allButtonArray = Array.from(allButtons);
    allButtonArrayWOOps = allButtonArray.filter((button) => {
        return !(button.textContent === '-' || button.textContent === '+' || button.textContent === '/' || button.textContent === 'x');
    });
    allButtonArrayWOOps.map((button) => {
        button.addEventListener("mousedown", () => { button.style.backgroundColor = "#c7dce4"; });
        button.addEventListener("mouseup", () => { button.style.backgroundColor = "#add7e6"; });

    })

    //indicates a number button was clicked
    let numButtonClicked = false;
    let num1 = null;
    let operator = null;
    let num2 = null;

    let opButtonClicked = [false, false, false, false,];

    //add event listener to number buttons so that when a number is clicked,
    //it shows up on the display after the previous numbers, and if 0 is the only number there,
    //0 gets replaced by the number clicked.
    //max characters on screen is 12;
    //if buttonClicked is true, that means an operator button was entered, so by clicking a number,
    //this changes the operator button to its original color

    const numButtons = document.querySelectorAll(".number-button");
    const numButtonArray = Array.from(numButtons);
    const display = document.querySelector("#calculator-screen");
    let numCount = 0;

    numButtonArray.map((button) => {
        button.addEventListener("click", () => {
            numButtonClicked = true;
            //if (numCount != 12) {
                if (display.textContent === "0") {
                    display.textContent = "";
                } else if (opButtonClicked.includes(true)) {
                    display.textContent = "";
                    buttonSwitch(divideButton, multiplyButton, addButton, subtractButton);
                    opButtonClicked.map((op) => {op = false});
                }
                display.textContent += button.textContent;
                numCount++;
           // }
        });
    });



    //event listener for divide button
    //num2=null so the equals button knows to not use the previous output (6/2/2=1.5)
    //if num1 is a number, that means the user already has num1, the operataor, and num 2 in the display
    //else it is the first operation 
    //#c7dce4 is the color of the button when it is pressed down 
    const divideButton = document.querySelector("#divide");
    divideButton.addEventListener("click", () => {
        if (typeof num1 === "number" && numButtonClicked) {
            num2 = +display.textContent;
            display.textContent = operate(num1, num2, operator);
            divideButton.style.backgroundColor = "#c7dce4";
            num1 = null;
        } else if (numButtonClicked) {
            operator = "/"
            num1 = +display.textContent;
            divideButton.style.backgroundColor = "#c7dce4";
            num2 = null;
        }
        opButtonClicked[0] = true;
        numButtonClicked = false;
    });

    const multiplyButton = document.querySelector("#multiply");
    multiplyButton.addEventListener("click", () => {
        if (typeof num1 === "number" && numButtonClicked) {
            num2 = +display.textContent;
            display.textContent = operate(num1, num2, operator);
            multiplyButton.style.backgroundColor = "#c7dce4";
            num1 = null;
        } else if (numButtonClicked) {
            operator = "*"
            num1 = +display.textContent;
            multiplyButton.style.backgroundColor = "#c7dce4";
            num2 = null;
        }
        opButtonClicked[1] = true;
        numButtonClicked = false;
    });

    const addButton = document.querySelector("#add");
    addButton.addEventListener("click", () => {
        if (typeof num1 === "number" && numButtonClicked) {
            num2 = +display.textContent;
            display.textContent = operate(num1, num2, operator);
            addButton.style.backgroundColor = "#c7dce4";
            num1 = null;
        } else if (numButtonClicked) {
            operator = "+"
            num1 = +display.textContent;
            addButton.style.backgroundColor = "#c7dce4";
            num2 = null;
        }
        opButtonClicked[2] = true;
        numButtonClicked = false;
    });

    const subtractButton = document.querySelector("#minus");
    subtractButton.addEventListener("click", () => {
        if (typeof num1 === "number" && numButtonClicked) {
            num2 = +display.textContent;
            display.textContent = operate(num1, num2, operator);
            subtractButton.style.backgroundColor = "#c7dce4";
            num1 = null;
        } else if (numButtonClicked) {
            operator = "-"
            num1 = +display.textContent;
            subtractButton.style.backgroundColor = "#c7dce4";
            num2 = null;
        }
        opButtonClicked[3] = true;
        numButtonClicked = false;
    });

    //event listener for equals button
    //if num2=null, then a new operation with different numbers is being used
    //else, use output from previous calculation as num1
    const equalButton = document.querySelector("#equals");
    let tempNum = +display.textContent;
    equalButton.addEventListener("click", () => {
        if (num2 === null) {
            num2 = +display.textContent;
            display.textContent = operate(num1, num2, operator);
            num1 = null;
        } else {
            num1 = display.textContent
            display.textContent = operate(num1, num2, operator);
        }
        numCount=0;
        buttonSwitch(divideButton, multiplyButton, addButton, subtractButton);
    });


    //clears display
    const clearButton = document.querySelector("#clear");
    clearButton.addEventListener("click", () => {
        num1 = null;
        operator = null;
        num2 = null;
        display.textContent = "0";
        numCount=0;
        buttonSwitch(divideButton, multiplyButton, addButton, subtractButton);
    });




}

addEventListenersToButtons();
