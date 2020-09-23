console.log("test");
function generate() {
}

/*create variables to store password option arrays */


var generateBtn = document.querySelector("#generate");
let result = document.querySelector

function writePassword() {
    console.log("password function working")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

var confirmLength;

/*while(confirmLength <=7 || confirmLength >= 129)
    alert("password length must be between 8-29 characters") */

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

function generatePassword() {
    var password =""
var length = parseInt(prompt("What length would you like for the password?"));

var wantUpperCase = prompt("Do you want uppercase letters?");
/* if wantUpperCase{ */
return password
};
var useUppers = prompt("Do you want to use uppercase letters?");

if (useUppers) {
 password += getRandomUpperCase();
};

var useLowers = prompt("Do you want to use lowercase letters?");

if (useLowers) {
 password += getRandomLowerCase();
};

var useNumbers = prompt("Do you want to use numbers?");

if (useNumbers) {
 password += getRandomNumbers();
};

var useSymbols = prompt("Do you want to use symbols?");

if (useNumbers) {
 password += getRandomSymbols();
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
