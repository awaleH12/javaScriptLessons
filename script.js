console.log("Welcome to EVC!");

// pay bill
// nine digit format


// creating an check function
function checkPhone(numbers) {
  // Use a regular expression to check if the string contains only numbers
  return /^[0-9]+$/.test(numbers);
}

// Example usage:
var phone = "612102010";
if (checkPhone(phone)) {
  console.log("The string contains only numbers.");
} else {
  console.log("The string contains non-numeric characters.");
}

// creating an check function
function checkLetters(letters) {
  // Use a regular expression to check if the string contains only numbers
  return /^[a-z]+$/.test(letters);
}

// Example usage:
var alpha = "hassan1";
if (checkLetters(alpha)) {
  console.log("The string contains only letters.");
} else {
  console.log("The string contains non-alphabetic characters.");
}