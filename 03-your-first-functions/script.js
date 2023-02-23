//01 Greet function

//Short Function
function welcomeMsgShort(name) {
  return "Welcome " + name;
}

console.log("==== 01 Greet function: Results of short funktions ====");
console.log(welcomeMsgShort("Jane"));
console.log(welcomeMsgShort("Marc"));
console.log(welcomeMsgShort("Stranger"));

//Long Function with testing
function welcomeMsg(name) {
  //Test if name is a string. Gives message only when using a string
  if (typeof name !== "string") {
    return `Please, enter a "String" for the welcome message. You entered a ${typeof name}`;
  } else {
    return `Welcome ${name}!`;
  }
}

console.log("==== 01 Greet function: Results of funktions with testing ====");
console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Marc"));
console.log(welcomeMsg("Stranger"));

//---------------------------------------------------------------------------------------------------------

//02 Gross Price Function

//Short Function
function calcGrossPriceShort(netPrice, tax) {
  return (netPrice += netPrice * tax);
}

console.log(
  "==== 02 Gross Price Function: Results of funktions of short funktions ===="
);
console.log(calcGrossPriceShort(20, 0.19));
console.log(calcGrossPriceShort(40, 0.16));

//Long Function with testing
function calcGrossPrice(netPrice, tax) {
  //Testing if both values are numbers
  if (isNumber(netPrice) && isFloat(tax)) {
    //Testing if tax is a float and netPrice not a float
    return (netPrice += netPrice * tax);
  } else {
    console.log(
      `Please check if the first argument is a number and the second a float.
      Test shows:
      Number = ${isNumber(
        netPrice
      )}, Type is ${typeof netPrice}. If type is number, check for not using float
      Float  = ${isFloat(tax)}, Type is ${typeof tax}
      Both values must be true to performe the calculation.
      The float value for this calculation should not exceed 1.0, we do not support high taxes!`
    );
  }
}

function isNumber(n) {
  //True if Number
  return n % 1 === 0 && typeof n === "number";
}

function isFloat(n) {
  //True if float
  return n % 1 !== 0 && n <= 1 && typeof n === "number";
}

console.log(
  "==== 02 Gross Price Function: Results of funktions with testing ===="
);
console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));

//---------------------------------------------------------------------------------------------------------

//03 Add Positive Function

//(Short) Function: Without testing and Math.abs()

function addPositiveShort(num1, num2) {
  if (num1 < 0) {
    num1 *= -1;
  }
  if (num2 < 0) {
    num2 *= -1;
  }
  return num1 + num2;
}

console.log("==== 03 Add Positive Function: Results of short funktions ====");
console.log(addPositiveShort(2, 3));
console.log(addPositiveShort(3, -5));
console.log(addPositiveShort(-1, -8));

//Long Function with testing and Math.abs()

function addPositive(num1, num2) {
  if (isNumber(num1) && isNumber(num2)) {
    return Math.abs(num1) + Math.abs(num2);
  } else {
    console.log(`One Argument is not a number:
    Type of first Argument  = ${typeof num1}
    Type of second Argument = ${typeof num2}`);
  }
}

console.log(
  "==== 03 Add Positive Function: Results of funktions with testing ===="
);
console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));


