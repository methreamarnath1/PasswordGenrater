const passwordbox = document.querySelector("#passwordbox");
const copy = document.querySelector("#copy");

function generatePassword() {
  const numdrlength = document.querySelector("#numdrlength").value;
  const uppercase = document.querySelector("#uppercase").checked;
  const lowercase = document.querySelector("#lowercase").checked;
  const specialchar = document.querySelector("#specialchars").checked;
  const numbr = document.querySelector("#numbers").checked;
  const symbol = document.querySelector("#symbols").checked;

  let password = "";
  let characters = "";

  // Add characters based on selected checkboxes
  if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
  if (numbr) characters += "0123456789";
  if (specialchar) characters += "!@#$%^&*()-_=+[{]};:'\",.<>/?";
  if (symbol) characters += "`~@#$%^&*()-_=+[{]};:'\",.<>/?";

  // Generate password
  for (let i = 0; i < numdrlength; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  passwordbox.value = password;
}

function copyPassword() {
  const password = passwordbox.value;

  // Use navigator.clipboard.writeText instead of document.execCommand
  navigator.clipboard
    .writeText(password)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}

// Generate password on button click
document
  .querySelector(".generate button")
  .addEventListener("click", generatePassword);

// Copy password on icon click
copy.addEventListener("click", copyPassword);
