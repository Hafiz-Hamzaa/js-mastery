// Lecture 18 : Higher Ordered Methods of Arrays

// Higher Ordered Function : aisa function jo apne arguments me aik or fnc accept kre || aisa func jo apne ander return kre aik or fnc

// Callbacks : fnc kai ander jo fnc pass huwa ho arguments me wo callback hota 

// Array Powerful Methods : map , filter , foreach , reduce (They all are Higher Order and accept callbacks indide)

// Common things: 
// They all are iterate over an Array

// foreach : Sirf iterate karna (no return an array) agr ap zabardasti return kra rahe hai to undefined dega
// map : return New array : Transformation / Modification (return something for each element)
// filter : return New Array Filter elements based on condition or agr kuch bh return nh kra rahe hai lekin ye return to krta hi phr wo apko empty arr [] dega
// reduce : Single Value Reduce entire array into one value (sum, product, etc.)
// Chaining Methods : map().filter().reduce() aik sth multiple methods lgadena

// 🚀 Higher Order Function Practice Problems
// 🔹 1. forEach Explorer 👉 Print each student's name with a message
const students = ['Hamza','Umer','Hassan','Zaid']
students.forEach((student) => {
    console.log(`Hello ${student}`);
})

// 🔹 2. Double the Numbers (map) 👉 Return a new array with each number doubled
const numbers = [2, 4, 6, 8];
const doubleNum = numbers.map((number)=>{
    return number*number
})
console.log(doubleNum);

// 🔹 3. Filter the Passing Students (filter) 👉 Return only students with marks above 50
const marks = [40, 85, 30, 60, 75];
const aboveFifty = marks.filter((val) => val > 50)
console.log(aboveFifty);

// 🔹 4. Word Length Finder (map) 👉 Return an array containing the length of each word
const words = ["apple", "banana", "kiwi"];
const eachWordLength = words.map((ele) => {
    return ele.length
})
console.log(eachWordLength);

// 🔹 5. Total Shopping Cart Price (reduce) 👉 Calculate total cost from an array of prices
const prices = [1200, 500, 800, 300];
const totalCal = prices.reduce((acc,curr) => {
    return acc + curr
},0)
console.log(totalCal);

// 🔹 6. Filter and Transform (Chaining map + filter)
// 👉 From an array of numbers,
// 1️⃣ Keep only numbers greater than 10
// 2️⃣ Then multiply each by 2
const arr = [5, 10, 15, 20];
const finalSol = arr.filter((val)=>{
    return val > 10
}).map((val)=>{
    return val * 2
})
console.log(finalSol);

// 🔹 7. Concatenate All Strings (reduce) 👉 Combine all words into one sentence using reduce()
const word = ["JavaScript", "is", "awesome"];
const singleSen = word.reduce((acc,curr) => {
    return acc + " " + curr
})
console.log(singleSen);

// 🔹 8. Comprehensive Chaining Challenge
const data = [1, 2, 3, 4, 5];
const finalOut = data.filter((val) => {
    return val % 2 != 0
}).map((val)=>{
    return val * 2
}).reduce((acc,curr) => {
    return acc + curr
},0)
console.log(finalOut);
