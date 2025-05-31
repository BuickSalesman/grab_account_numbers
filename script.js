function isCapital(c) {
  return "A".charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= "Z".charCodeAt(0);
}

function getAcctNumbers(string) {
  let res = "";
  let capCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (capCount === 3 && string[i] === "-") {
      if (string[i + 11] === "-") {
        res += string.slice(i + 1, i + 11) + "\n";
        i += 11;
      }
    }

    if (isCapital(string[i])) {
      capCount++;
    } else {
      capCount = 0;
    }
  }

  return res;
}

document.getElementById("input").addEventListener("input", () => {
  let inputString = document.getElementById("input").value;

  let outputString = getAcctNumbers(inputString);
  document.getElementById("output").value = outputString;
});
