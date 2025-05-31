function isCapital(c) {
  return "A".charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= "Z".charCodeAt(0);
}

function isNumber(c) {
  return "0".charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= "9".charCodeAt(0);
}

function getAcctNumbers(string) {
  let formattedReturnString = "";
  let acctNumArr = [];
  let acctPrefix = "";
  let acctSuffix = "";
  for (let letter of string) {
    //do stuff
  }

  for (const acct of acctNumArr) {
    formattedReturnString = formattedReturnString + acct + "\n";
  }

  return formattedReturnString;
}

document.getElementById("input").addEventListener("input", () => {
  let inputString = document.getElementById("input").value;

  let outputString = getAcctNumbers(inputString);
  document.getElementById("output").value = outputString;
});
