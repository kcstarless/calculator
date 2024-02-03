let num = null;
let operator = null;
let isOp = false;
let solution = null;

// All document selectors
let numpad = document.querySelector(".calc-numpad");
let display = document.querySelector(".calc-display");

// Limit output to fit the display screen
function round(number) {
    if (number.toString().length > 10) {
        return number.toPrecision(9);
    }
    return number;
}
// Addition 
function add(x, y) {
    return round(Number(x) + Number(y));
}
// Substraction 
function substract(x, y) {
    return round(Number(x) - Number(y));
}
// Multiplication
function multiply(x, y) {
    return round(Number(x) * Number(y));
}
// Division 
function divide(x, y) {
    return round(Number(x) / Number(y));
}
// Clears all variables 
function clear() {
    display.textContent = "";
    operator = null;
    solution = null;
    num = null;
    isOp = false;
}

// Take two number and a operator and calls matching operator function
function operate(solution, num, operator) {
    switch (operator) {
        case "+":
            return add(solution, num);
        case "-":
            return substract(solution, num);
        case "*":
            return multiply(solution, num);
        case "/":
            if (num === "0" || num === 0 || num === null) {
                return display.textContent = "Error";
            }
            else {
                return divide(solution, num);
            }
        default:
            display.textContent = "Error";
            break;
    }
}


numpad.addEventListener("click", (event) => {
    let calcBtn = event.target.className;
    let value = event.target.value;

    if (calcBtn === "number") {
        if (isOp)                       
        {
            display.textContent = "";
            isOp = false;
        }
        
        display.textContent += value;
        num = display.textContent; 
       
    }

    else if (calcBtn === "op") {
         
        if (solution !== null) {
            solution = operate(solution, num, operator);
            display.textContent = solution;
            operator = value;
            isOp = true;
        }
        else if (solution === null) {
            operator = value; 
            solution = num;
            isOp = true;
        }
    }
    else if (calcBtn === "equals") {
        if (solution !== null && num !== null) {
            display.textContent = operate(solution, num, operator);
        }
    }
    else if (calcBtn === "clear") {clear()};
})

