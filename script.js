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

let currentInput;

function populateDisplay(input) {
  const output = querySelector(".display-area output");
  currentInput += input;
  output.innerText = currentInput;
}
