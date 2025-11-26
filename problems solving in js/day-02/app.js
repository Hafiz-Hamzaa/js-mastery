// ⭐ DAY 2 — Problems

// 🟩 Problem 1: Sum of Numbers in Array
function sumArr(arr) {
  let count = 0;
  for (let ele of arr) {
    count += ele;
  }
  return count;
}
console.log(sumArr([5, 10, 15, 20]));

// 🟩 Problem 2: Palindrome Check
let str = "madam";
let revStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  revStr += str[i];
}
if (str === revStr) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

// 🟩 Problem 3: Remove Falsy Values
let arr = [0, 1, false, 2, "", 3, null, undefined];
let myArr = [];
for (let ele of arr) {
  if (ele) {
    myArr.push(ele);
  }
}
console.log(myArr);

// 🟩 Problem 4: Capitalize Every Word
let words = "hello world from js";
let breakWords = words.split(" ").map((word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
});
console.log(breakWords.join(" "));

// 🟩 Problem 5: Find Second Largest Number
let arrNo = [2, 12, 56, 90, 20];
let firstMax = arrNo[0];
for (let val of arrNo) {
  if (val > firstMax) {
    firstMax = val;
  }
}
console.log(firstMax);

let secondMax = arrNo[1];
for (let ele of arrNo) {
  if (ele !== firstMax && ele > secondMax) {
    secondMax = ele;
  }
}
console.log(secondMax);