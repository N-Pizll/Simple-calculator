function sum(number1, number2) {
    return number1 + number2;
  }
  
  function plus(number1, number2) {
    return number1 * number2;
  }
  
  function knock(number1, number2) {
    return number1 / number2;
  }
  
  function negative(number1, number2) {
    return number1 - number2;
  }
  
  let dasham = Number(prompt("enter number:"));
  let dashesh = prompt("enter operation:'+','*'");
  let dashemon = Number(prompt("enter number:"));
  
  if (dashesh == "+") {
    console.log(sum(dasham, dashemon));
  }
  if (dashesh == "*") {
    console.log(plus(dasham, dashemon));
  }
  if (dashesh == "/") {
    console.log(knock(dasham, dashemon));
  }
  if (dashesh == "-") {
    console.log(negative(dasham, dashemon));
  }