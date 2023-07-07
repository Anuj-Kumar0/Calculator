const sum = function (...args) {
  return args.reduce(
    (previousSum, currentValue) => previousSum + currentValue,
    0
  );
};

const difference = function (...args) {
  return args.reduce(
    (previousNumber, currentValue) => previousNumber - currentValue
  );
};

const multiplication = function (...args) {
  return args.reduce(
    (previousNumber, currentValue) => previousNumber * currentValue
  );
};

const division = function (...args) {
  return args.reduce(
    (previousNumber, currentValue) => previousNumber / currentValue
  );
};

const result = document.querySelector("#result");
/*const number_7 = document.querySelector("#7");
const number_8 = document.querySelector("#8");
const number_9 = document.querySelector("#9");
const divide_element = document.querySelector("#/");
const number_4 = document.querySelector("#4");
const number_5 = document.querySelector("#5");
const number_6 = document.querySelector("#6");
const multiplication_element = document.querySelector("#*");
const number_1 = document.querySelector("#1");
const number_2 = document.querySelector("#2");
const number_3 = document.querySelector("#3");
const subtraction_element = document.querySelector("#-");
const period = document.querySelector("#.");
const number_0 = document.querySelector("#0");
const equals_element = document.querySelector("#=");
const addition_element = document.querySelector("#+");*/

const resultNumbers = "";
function Press(e) {
  const selectTarget = e.target;
  const currentContent = selectTarget.textContent;
  if (resultNumbers === "=") {
    solveExpression();
  } else {
    resultNumbers += currentContent;
  }
  return (result.textContent = resultNumbers);
}

const allButtons = document.querySelectorAll(".clickButtons");
allButtons.forEach(function (button) {
  button.addEventListener("click", Press);
});
