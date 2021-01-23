// OPERATOR FUNCTIONS

function add(value1, value2) {
    return parseInt(value1 + value2);
}

function substract(value1, value2) {
    return value1 - value2;
}

function multiply(value1, value2) {
    return value1 * value2;
}

function divide(value1, value2) {
    if (value2 === 0) {
        return "Stop joking, plz";
    } else {
        return value1 / value2;
    }
}

// OPERATION FUNCTION

function operate(operator, value1, value2) {
    if (operator === "add") {
        return add(value1, value2);
    } else if (operator === "substract") {
        return substract(value1, value2);
    } else if (operator === "multiply") {
        return multiply(value1, value2);
    } else if (operator === "divide") {
        return divide(value1, value2);
    }
}
console.log(operate("substract", 28, 6)); 


// SET VALUES ON DISPLAY SCREEN CLICKING BUTTONS

const screen = document.querySelector("display-screen");
const btn = document.querySelector("#one");
btn.addEventListener("click", () => {
  alert("Hey");
});
