// ⭐ DAY 1 — Level 1 (Logic Activation Problems)

// 🟩 Problem 1: Find Even Numbers
function getEven(arrEven) {
    let evenNumbers = []
    for (const element of arrEven) {
        if(element % 2 === 0){
            evenNumbers.push(element)
        }
    }
    return evenNumbers
}
console.log(getEven([3, 8, 12, 5, 9, 20]));

// 🟩 Problem 2: Reverse String Without Using reverse()
let str = "javascript"
let revStr = ""
for(let i = str.length - 1; i >= 0; i--){
    revStr += str[i]
}
console.log(revStr)

// 🟩 Problem 3: Find Largest Number Manually
let arr = [2, 19, 7, 4, 21, 5]
let maxArr = arr[0]
for(let ele of arr){
    if(ele > maxArr){
        maxArr = ele
    }
}
console.log(maxArr);

// 🟩 Problem 4: Convert First Letter to Uppercase
let word = "javascript"
let finalRes = word.charAt(0).toUpperCase() + word.slice(1)
console.log(finalRes);

// 🟩 Problem 5: Count Occurrences of Array
function countOccurene(arr) {
    let count = 0
    for(let val of arr){
        if(val === "a"){
            count++
        }
    }
    return count
}
console.log(countOccurene(["a","b","a","c","a"]));

// ⭐ Result: DAY 1 — 100% PASSED 🔥🔥🔥