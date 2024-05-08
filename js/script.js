const display = document.getElementById("display");

const ac = document.querySelector(".ac");
const del = document.querySelector(".delete");
const dash = document.querySelector(".dash");
const star = document.querySelector(".star");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const minus = document.querySelector(".minus");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const plus = document.querySelector(".plus");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const zero = document.querySelector(".zero");
const dot = document.querySelector(".dot");
const equal = document.querySelector(".equal");

let expression = "";

// function to display symbols
function displaySymb(symb) {
  expression += symb;
  display.value = expression;
}

// adding function to each button
dash.addEventListener("click", function () {
  displaySymb("/");
});
star.addEventListener("click", function () {
  displaySymb("*");
});
seven.addEventListener("click", function () {
  displaySymb("7");
});
eight.addEventListener("click", function () {
  displaySymb("8");
});
nine.addEventListener("click", function () {
  displaySymb("9");
});
minus.addEventListener("click", function () {
  displaySymb("-");
});
four.addEventListener("click", function () {
  displaySymb("4");
});
five.addEventListener("click", function () {
  displaySymb("5");
});
six.addEventListener("click", function () {
  displaySymb("6");
});
plus.addEventListener("click", function () {
  displaySymb("+");
});
one.addEventListener("click", function () {
  displaySymb("1");
});
two.addEventListener("click", function () {
  displaySymb("2");
});
three.addEventListener("click", function () {
  displaySymb("3");
});
zero.addEventListener("click", function () {
  displaySymb("0");
});
dot.addEventListener("click", function () {
  displaySymb(".");
});

// calculate result
equal.addEventListener("click", function () {
  try {
    let result = eval(expression);
    display.value = result;
    expression = "";
  } catch (error) {
    display.value = "meow";
    console.log("error // wrong expression entered");
  }
});

// AC - all clear
ac.addEventListener("click", function () {
  expression = "";
  display.value = "";
});

// CE - clear entry
del.addEventListener("click", () => {
  expression = expression.slice(0, -1);
  display.value = expression;
});
