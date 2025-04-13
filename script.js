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

function populateDisplay(input) {
  const output = document.querySelector(".display-area output");
  currentInput += input;
  output.innerText = currentInput;
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

