//01) Spot the errors and fix them

//Original

/* const userName = Brad;
userName = "Jenna";

function getUserNameLength {
  return const result = name.length
}

console.log(getUserNameLength(userName) > 4)
// ^______________ Should log true */

//Solution

let userName = "Brad";
userName = "Jenna";

function getUserNameLength(name) {
  return (result = name.length);
}

console.log("==== 01) Solution: Spot the errors and fix them ====");
console.log(getUserNameLength(userName) > 4);

//02) isString function

/* todo
Implement a isString function.
 The function has one parameter which could be any kind of data type
 The function is written as a function expression
 The function returns a boolean. It returns only true, when the data type is a string otherwise it will return false */

const isString = function (value) {
  return typeof value === "string";
};

console.log("==== 02) Solution: isString function ====");
console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true


const zahlenArray = [34,[2323, 2342],2354,234,123,5345,45,2,45,"Tom", true];
const nameList = ["Peter", "Sarah", "Franz", "Voldemort"];

function variablenBuggy(rumbel) {
  let a = 10;
  let b = a + rumbel;
  const c = a + b;
  zahlenArray.push(c);
}


console.log(zahlenArray);

function berechneZahlen(a, b){
  variablenBuggy(44);
  return a + b + zahlenArray[10];
}

console.log(berechneZahlen(zahlenArray[1][0], zahlenArray[9]));

