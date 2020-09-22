
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

function generatePassword {
var length = parseInt(prompt("What length would you like for the password?"))
};

function getRandomUpperCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
 };
 function getRandomLowerCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
};
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
};

function getRandomSymbol(){
  var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
  return symbol[Math.floor(Math.random()*symbol.length)];
};

var password =""
var useUppers = confirm("Do you want to use uppercase letters?");

if (useUppers) {
 password += getRandomUpperCase();
};

var password =""
var useUppers = confirm("Do you want to use lowercase letters?");

if (useLowers) {
 password += getRandomLowerCase();
};

var password =""
var useNumbers = confirm("Do you want to use numbers?");

if (useUppers) {
 password += getRandomNumbers();
};

var password =""
var useUppers = confirm("Do you want to use symbols?");

if (useUppers) {
 password += getRandomSymbols();
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
