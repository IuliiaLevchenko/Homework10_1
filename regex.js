//Function to match any six characters that are not have'A' or 'a' from the begining of the string consecutively
function findNonASymbols() {
  const inputString = document.getElementById("inputString").value;
  //This regex pattern [^aA]{6} will match any six characters that are not have 'A' or 'a' from the begining of the string consecutively globaly
  const regex = /[^aA]{6}/g;
  const matches = inputString.match(regex);
  // Condition to match needed parts of string and output them
  if (matches) {
    let output =
      "Found the following parts of the string with six symbols not containing 'A' or 'a':<br>";
    matches.forEach((match) => {
      output += `- ${match}<br>`;
    });
    document.getElementById("output").innerHTML = output;
  } else {
    document.getElementById("output").innerHTML =
      "No parts of the string contain six symbols without 'A' or 'a'.";
  }
}
