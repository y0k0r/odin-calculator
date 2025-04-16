let a, b, operator;

function add (a, b) {
  return a + b;
}

function subtract (a, b) {
  return a - b;
}

function multiply (a, b) {
  return a * b;
}

function divide (a , b) {
  if (b === 0) {
    return `Error`;
  } else {
    return a / b;
  }
}

function operate (a, b, operator) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return null;
  }
}

let currentInput = "";
let result = "";

const output = document.querySelector(".display-area output");

function populateDisplay(input) {
  if (result !== "") {
    output.innerText = result.toFixed(4).toString();
    result = "";
  } else {
    currentInput += input;
    output.innerText = currentInput;
  }
}

function clear() {
  currentInput = "";
  a = "";
  b = "";
  operator = "";
  result = "";
  output.innerText = "0";
}

const btn0 = document.querySelector(".btn-numeric-0");
const btn1 = document.querySelector(".btn-numeric-1");
const btn2 = document.querySelector(".btn-numeric-2");
const btn3 = document.querySelector(".btn-numeric-3");
const btn4 = document.querySelector(".btn-numeric-4");
const btn5 = document.querySelector(".btn-numeric-5");
const btn6 = document.querySelector(".btn-numeric-6");
const btn7 = document.querySelector(".btn-numeric-7");
const btn8 = document.querySelector(".btn-numeric-8");
const btn9 = document.querySelector(".btn-numeric-9");
const btnClr = document.querySelector(".btn-clear");
const btnEql = document.querySelector(".btn-equal");
const btnDivision = document.querySelector(".btn-division");
const btnMultiply = document.querySelector(".btn-multiply");
const btnMinus = document.querySelector(".btn-minus");
const btnPlus = document.querySelector(".btn-plus");
const btnDecimal = document.querySelector(".btn-decimal");
const btnBackspace = document.querySelector(".btn-backspace");
const btnPercentage = document.querySelector(".btn-percentage");
const btnPlusMinus = document.querySelector(".btn-plus-minus");

btn0.addEventListener("click", () => populateDisplay("0"));
btn1.addEventListener("click", () => populateDisplay("1"));
btn2.addEventListener("click", () => populateDisplay("2"));
btn3.addEventListener("click", () => populateDisplay("3"));
btn4.addEventListener("click", () => populateDisplay("4"));
btn5.addEventListener("click", () => populateDisplay("5"));
btn6.addEventListener("click", () => populateDisplay("6"));
btn7.addEventListener("click", () => populateDisplay("7"));
btn8.addEventListener("click", () => populateDisplay("8"));
btn9.addEventListener("click", () => populateDisplay("9"));
btnClr.addEventListener("click", () => clear());

function handleOperator(nextOperator) {
  if (a && operator && currentInput) {
    b = Number(currentInput);
    result = operate(a, b, operator);
    a = result;
    populateDisplay(result);
    operator = nextOperator;
    currentInput = "";
    b = "";
  } else if (currentInput) {
    a = Number(currentInput);
    operator = nextOperator; 
    currentInput = "";
  } else if (a) {
    operator = nextOperator;
  } 
}

btnDivision.addEventListener("click", () => handleOperator("/"));
btnMultiply.addEventListener("click", () => handleOperator("*"));
btnMinus.addEventListener("click", () => handleOperator("-"));
btnPlus.addEventListener("click", () => handleOperator("+"));

btnPlusMinus.addEventListener("click", () => { 
  if (result) {
    currentInput = (result * -1).toString();
  } else if (currentInput) {
    currentInput = (Number(currentInput)* -1).toString();
  }
    output.innerText = currentInput;
});

btnPercentage.addEventListener("click", () => {
  if (!currentInput) return;
  
  if (a && operator) {
    currentInput = ((a * Number(currentInput))/100).toString();
  } else {
    currentInput = (Number(currentInput)/100).toString();
  }
  output.innerText = currentInput;
});

btnBackspace.addEventListener("click", () => {
  if (currentInput.length > 1){
    currentInput = currentInput.slice(0,-1);
    output.innerText = currentInput;
  } else {
    currentInput = ""
    output.innerText = "0";
  }
})

btnDecimal.addEventListener("click", () => {
  if (currentInput.includes(".")) return;
  currentInput += ".";
  output.innerText = currentInput;
})

btnEql.addEventListener("click", () => { 
  if(a && operator && currentInput){
    b = Number(currentInput);
    result = operate(a, b, operator)
    currentInput = "";
    a = "";
    b = "";
    operator = "";
    populateDisplay(result);
  }
});
