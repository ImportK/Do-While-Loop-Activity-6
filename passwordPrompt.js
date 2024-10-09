// Add function and define the correct password.
function checkPassword() {
    const correctPassword = "nalipatakon";
    let userPassword;

// Use a do-while loop to prompt for the password.
do {
  // Prompt the user to enter their password.
  userPassword = prompt("Enter your password:");

  // Check if the entered password is correct
  if (userPassword !== correctPassword) {
    alert("Incorrect password. Try again.");
  }
} while (userPassword !== correctPassword);
alert("Access granted!");
}