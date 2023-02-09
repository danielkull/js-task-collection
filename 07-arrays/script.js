// 01) removeItem function

function removeItem(arr, num) {
  const copyArr = arr.slice(); //Create shallow copy
  //Modify copy with splice
  copyArr.splice(num - 1, 1); //Remove 1 item, start position index corrected with "num - 1".
  //animal start index = 0; fruits start index = 2
  return copyArr; //return modifyed copy
}

// TODO: Implement the removeItem function

console.log("==== 01) Solution: removeItem function ====");

const ainmals = ["Dog", "Cat", "Lion"];
console.log(removeItem(ainmals, 1));
// result should be: ["Cat", "Lion"]

console.log(ainmals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

//------------------------------------------------------------------------------

//03) sumOfCharacters function

function sumOfCharacters(arr) {
  let count = 0; //Creat variable for counting
  for (let index = 0; index < arr.length; index++) {
    //Check each array entry till the end
    if (typeof arr[index] === "string") {
      //Is the actual array entry is a string?
      count += arr[index].length; //Yes it is! Then add to count the length number of the respective word
    }
  }
  return count;
}

// TODO: Implement the sumOfCharacters function

console.log("==== 02) Solution: sumOfCharacters function ====");

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55
