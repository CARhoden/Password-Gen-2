// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Created arrays that hold all possible characters for the password
var lowerCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var upperCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

function generatePassword() {
  // prompt how many char
  // var for char

  // what types of char
  // special,number, upper, lower
  // window.confirm

  // use answers to make password
  // vars that include all possible char
  // seperate vars for each type in arrays

  //Prompt the users for how long they want the password to be
  var charNumber = prompt("Pick between 8-128 characters.");

  //Make sure the password in between 8-128 characters
  if (charNumber < 8 || charNumber > 128) {
    charNumber = prompt("Password must be between 8-128 characters.")
  }

  //ask the user what characters they would like to have int he password
  var yesLower = confirm("Do you want lowercase characters?")
  var yesUpper = confirm("Do you want Uppercase characters?")
  var yesNumber = confirm("Do you want Numbers?")
  var yesSpecial = confirm("Do you want Special characters?")


  //if no characters were chosen ask the user to try again
  if (yesLower === false && yesUpper === false && yesNumber === false && yesSpecial === false) {
    alert("Please select one character.")
  }


  //when the user chooses the characters they would like create a new array with their chosen characters
  var chosenChar = [];
  if (yesLower) {
    chosenChar = chosenChar.concat(lowerCaseChar)
  }
  if (yesUpper) {
    chosenChar = chosenChar.concat(upperCaseChar)
  }
  if (yesNumber) {
    chosenChar = chosenChar.concat(numberChar)
  }
  if (yesSpecial) {
    chosenChar = chosenChar.concat(specialChar)
  }


  //a for loop that picks random characters from the array that we just created as many times as prompted before
  var password = "";
  for (i = 0; i < charNumber; i++) {
    var randomPass = Math.floor(Math.random() * chosenChar.length);
    password += chosenChar[randomPass]
  }

  return password;

}
console.log(password)

