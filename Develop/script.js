// Assignment code here
var characterLength = 8;
var choice = [];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChar = ["!","@","#","$","%","^","&","*","?","<",">","/"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choice.length);
    password = password + choice[randomIndex];

  }
  return password;
}

// Prompt the user for the password criteria
function getPrompts() {
  choice = [];

  characterLength = parseInt(prompt("How many characters would you like your password to be? 8 - 128"));

  //if less than 8 or more than 128 (false)
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Error, Character length must be a number 8 - 128. Please try again.");
    return false;
  }

  //if choices meet criteria (true)
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
