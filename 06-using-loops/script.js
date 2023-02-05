// 01) oddNumbers function

function oddNumbers(currentValue, endValue) {
  if (currentValue < 0 || endValue < 0) {
    return "Please don't enter negative numbers.";
  }

  let newStr = "";
  for (let index = currentValue; currentValue <= endValue; currentValue++) {
    if (currentValue % 2 === 1) {
      if (newStr !== "") {
        newStr += "," + currentValue;
      } else {
        newStr += currentValue;
      }
    }
  }
  return newStr;
}

console.log("==== 01) Solution: oddNumbers function ====");

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

console.log(oddNumbers(-9, -12));
// result should be: "Please don't enter negative numbers."

//------------------------------------------------------------------------------

//02) charCount function

// TODO: Implement the charCount function

function charCount(word, char) {
  if (char.length > 1) {
    return "More then one character used! Function aborted.";
  }
  let count = 0;
  word = word.toLowerCase();
  char = char.toLowerCase();
  for (let index = 0; index < word.length; index++) {
    if (char === word[index]) {
      count++;
    }
  }
  return count;
}

console.log("==== 02) Solution: charCount function ====");

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3

//Case Insensitive Check
console.log(charCount("KartoffelpüRre", "R"));
// result should be: 3

//Case Insensitive Check
console.log(charCount("KnuFfelwuFf", "f"));
// result should be: 4

//Check if second Parameter consists of only one character
console.log(charCount("Pummelluff", "el"));
// result should be: "More then one character used! Function aborted."
