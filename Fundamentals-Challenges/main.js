// FUNDAMENTALS 1
// Write a function below that accepts a number as the only argument.
// The function should determine whether the number is divisible by 3,
// and return either true or false.
// Choose names that make the code easy to understand.
//
// Note:  None of the review # problems have tests included, but feel free to write your own.

function divisibleByThree(num) {
  return num % 3 === 0;
}

console.log(divisibleByThree(10));
console.log(divisibleByThree(9));
console.log(divisibleByThree(33));
console.log(divisibleByThree(35));

// FUNDAMENTALS 2
// Write a function that takes a string as the argument.
// The function should return a number that is the number of characters in the string.
// Choose names that make the code easy to understand.
function numberOfChars(str) {
  return str.length;
}

console.log(numberOfChars("cathy"));
console.log(numberOfChars("dao"));
console.log(numberOfChars("techtonica"));
console.log(numberOfChars("computer"));

// FUNDAMENTALS 3
// 1. Create an array of numbers, (ex: [1, 2, 3])
// 2. Without using any math operators, write 5 statements:
//   - Return the first item in the array (ex: 1)
//   - Return the last item in the array (ex: 3)
//   - Add a new item to the end of the array (ex: [1,2,3,4])
//   - Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
//   - Return the first item from the first item in the array. (ex: "a")

let arr = [1, 2, 3, 4, 5, 6, 7];

let arrFirst = arr[0];
console.log(arrFirst);
let arrLast = arr[arr.length - 1];
console.log(arrLast);
let arrPushed = arr.push(8);
console.log(arr);
let arrUnshift = arr.unshift(["a", "b", "c"]);
console.log(arr);
let arrFirstArr = arr[0][0];
console.log(arrFirstArr);

// FUNDAMENTALS 4
// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.

// use Date object to get current date and time
// use getHours and get Minutes to get Hours and Minutes
// multiple hours by 60 to convert hours to minutes and add to minutes
function minsFromMidnight() {
  const now = new Date();
  let hours = now.getHours();
  let mins = now.getMinutes();

  let totalMinutes = hours * 60 + mins;
  return totalMinutes;
}

console.log(minsFromMidnight());
