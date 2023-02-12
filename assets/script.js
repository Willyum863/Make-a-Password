// Assignment code here
var characterLength = 8;
var options = [];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChar = ["!","@","#","$","%","^","&","*","?","<",">","/"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var Index = Math.floor(Math.random() * options.length);
    password = password + options[Index];

  }
  return password;
}

// Prompt the user for the password criteria
function showPrompts() {
  options = [];

  characterLength = parseInt(prompt("How many characters would you like your password to be? 8 - 128"));

  //if less than 8 or more than 128 (false) Error message
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Error, Character length must be a number 8 - 128. Please try again.");
    return false;
  }

  //if options meet criteria (true) THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters 
  if(confirm("Would you like your password to contain lowercase letters?")){
    options = options.concat(lowerCase);
  }
  if(confirm("Would you like your password to contain UPPERCASE letters?")){
    options = options.concat(upperCase);
  }
  if(confirm("Would you like your password to contain numbers?")){
    options = options.concat(numbers);
  }
  if(confirm("Would you like your password to contain special characters?")){
    options = options.concat(specialChar);
  }

  return true;
}

// Write password to the #password input
function writePassword() {
  var truePrompts = showPrompts();
  if(truePrompts){ 
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
