// developer:Nima khastar
// gmail:nimapizll.nn@gmail.com

// in ja chand function tarif kardim ta da har kodom amalyataei ke mikhahim anjam dahim varde konim(dar ye function ham mishe vared kard ya bar aks)
function plus(number1, number2) {
  return number1 + number2;
}

function multiplication(number1, number2) {
  return number1 * number2;
}

function knock(number1, number2) {
  return number1 / number2;
}

function negative(number1, number2) {
  return number1 - number2;
}
// meghdar v opertion haro vared karde ta bad dar if be donbal chizi ke karbar mikhad begarde
let dasham = Number(prompt("enter number:"));
let dashesh = prompt("enter operation:'+','*'");
let dashemon = Number(prompt("enter number:"));

// bad in ke adad haro gereft dar dastor ha migarde ta on chizi ke karbar khasete ro peyda mikone va ejra mishe
if (dashesh == "+") {
  console.log(plus(dasham, dashemon));
}
if (dashesh == "*") {
  console.log(multiplication(dasham, dashemon));
}
if (dashesh == "/") {
  console.log(knock(dasham, dashemon));
}
if (dashesh == "-") {
  console.log(negative(dasham, dashemon));
}
