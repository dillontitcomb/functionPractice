var yourName = function() {
  var myPromptInput = prompt("What is your name?");
  alert("Your name is " + myPromptInput);
}


var add = function(number1, number2) {
  return number1 + number2;
}

$(function(){
  $("h1").click(function() {
    yourName();
  });
});
