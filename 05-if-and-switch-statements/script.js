//  01) Spot the errors and fix them

//Original Code
/* const size = 25;
let result;

if (size > 10) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20 */

//Solution

const size = 25;
let result;

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log("==== 01) Solution: Spot the errors and fix them ==== ");

console.log(result);
// Returns Greater than 10 but should return Greater than 20

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

//  02) oddEven function

function oddEven(value) {
  //Modulo/Remainder (%) operator: 1 = true = odd; 0 = false = even
  return value % 2 ? "odd" : "even"; //Alternative to if...else: Conditional (ternary) operator
}

console.log("==== 02) Solution: oddEven function ==== ");

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// 03) oldYoung function

// TODO: Implement the oldYoung function

function oldYoung(age) {
  if (typeof age !== "number" || age < 0) {
    return "invalid parameter";
  } else if (age < 16) {
    return "children";
  } else if (age < 50) {
    return "young person";
  } else {
    return "elder person";
  }
}

console.log("==== 03) Solution: oldYoung function ==== ");

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person

console.log(oldYoung("Test"));
// result should be elder person
