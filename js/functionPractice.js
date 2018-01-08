var yourName = function() {
  var myPromptInput = prompt("What is your name?");
  alert("Your name is " + myPromptInput);
}

var sentence = function() {
  var yourName = prompt("What is your name?");
  var yourAge = prompt("How old are you?");
  var yourFood = prompt("What is your favorite food?");
  alert("Your name is " + yourName + ", your age is " + yourAge + ", and your favorite food is " + yourFood + ".");
}

var add = function(number1, number2) {
  return number1 + number2;
}

var subtract = function(number1, number2) {
  return number1 - number2;
}

var multiply = function(number1, number2) {
  return number1 * number2;
}

var multiplyThree = function(number1, number2, number3) {
  return number1 * number2 * number3;
}

var divide = function(number1, number2) {
  return number1 / number2;
}

var modulus = function(number1, number2) {
  return number1 % number2;
}
var fToc = function(number1) {
  return (9/5 * number1) + 32;
}

var cToK = function(number1) {
  return (number1 + 273.15);
}

var fToK = function(number1) {
  return cToK(fToc(number1));
}

var weightToBMI = function() {
  var sex = prompt("What is your sex?");
  var weight = prompt("What is your weight?");
  var height = prompt("What is your height");
  if (sex===true) {
    return ((1.10*weight) - 128((weight*weight)/(100*(height*height))));
  } else {
    return ((1.07*weight) - 128((weight*weight)/(100*(height*height))));
  }
  return "PLEASE";
}

$(function(){
  $("h1").click(function() {
    sentence();
  });
});
