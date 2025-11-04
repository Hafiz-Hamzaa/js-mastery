// // Lecture 17 : Loops in JS
//for , while , do-while , break , continue , nested loop , looping over array using for loop

// basic for loop
for (let i = 0; i < 11; i++) {
    console.log(i);
}

// while loop
let i = 1
while (i <= 10) {
    console.log(i);
    i++
}

// do-while loop : atleast execute first time even the condition is false
let j = 1
do {
    console.log(`${j} execute atleast once time`);
    j++
} while (j > 10);

// loop over array using for loop
let fruits = ['apple','mango','pear','banana']
for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    console.log(element);
}

// break keyword : exist the loop 
for (let j = 1; j < 15; j++) {
    if(j == 5){
        console.log('Detected 5');
        break;
    }
    console.log(j);
}

// continue key word : skip the iteration
for (let x = 1; x <= 10; x++) {
    if(x == 4){
        console.log('4 is skipped');
        continue
    }
    console.log(x);
    
}


// Nested Loop Example 
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
 }
}


// for of , for in loops

// for of (iterate over array and string )
const myArr = [1,2,3,4,5]
for(const val of myArr){
    console.log(val);
}

// for in (iterate over objects most cases)
const obj = {
    name:'hamza',
    age:12,
    role:'developer'
}
for (const key in obj){
    console.log(`${key} : ${obj[key]}`);
}



// Count how many odd numbers are in an array.
let oddNumbers = [12,34,67,85,11,90]
let count = 0
for (let i = 0; i < oddNumbers.length; i++) {
    if(oddNumbers[i] % 2 != 0){
        count++
    }    
}
console.log(`count of odd numbers in an array should be : ${count}`);

// Create a function that reverses a string manually (no .reverse()).
function revStr(str) {
    let strArr = str.split("")
    let revString = ""
    for(let i = strArr.length - 1; i >= 0; i--){
        revString += strArr[i]
    }
    return revString
}
console.log(revStr("java"));