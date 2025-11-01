// Lecture 14 ------ Functions in JS
// Functions : reusable , manageable , organized code
// Functions are just like a variable

// Function Statement
function sayHello() {
    console.log('Hello');
}
sayHello() // invoke / call

// Function Expression
let sayBye = function() { // Anonympus Function without name
    console.log('Byeee');
}
sayBye()

// Pararmeters VS Arguments
// Parameters bh var ki trah hote hai jaha func define krte hai wha parameters hote hai
// Arguments jaha func call krte hai waha paa hote hai or arguments hamesha paramters kai pass jate hai phr ham unko use krkste hai
// return : return se ham koi bh value mangwakste hai : return hoi value waha jati hai jaha fnc call hota hai and second ye return kai neecge wali lines kbhi executed nh hoti

// Example :
function sum(num1,num2) {
    return num1 + num2
}
let result = sum(12,30) // 42
console.log(result);

// Default Parametrs : for example parameters me apne username ki value mangi but user ne arguments me value koi bh pass na kri to undefined ata hai lekin ap khud se by default parametrs me hi value ko set krskte hai

function greeting(username = 'umer') {
    return `Hello ${username}`
}
// console.log(greeting()); // Hello undefined
console.log(greeting()); // Hello umer

// rest operator ... : jb user bohat saare arguments pass kre to hame kia krna hoga utne parameter bh define krne pare gai to aisa na kre ham to uskai liye use kregai rest ao chahe to shoro ki 2 val 2 para me pass krdo baqi jitni rest hai uskai ander pass krdo wo hame aik array me wrap krkai dega 

function priceAmount(v1 , v2 , ...amount) {
    console.log(v1,v2,amount);
    
}
priceAmount(1200,1000,5000,7000,8000)

// Functions with Objects and Arrays
function greetingObj(obj) {
    return `Username is ${obj.name} and He is a ${obj.role}`
}
console.log(greetingObj({
    name: 'Hamza',
    role: 'Software Engineer'
}));

function secVal(arr) {
    return arr[1]
}
console.log(secVal([12,24,36]));
console.log('--------');

// 💪 Functions Practice Problems (Using All Concepts Learned Till Now)

// 🔹 Problem 1: Even or Odd Checker
function checkEvenOdd(num) {
    if(num % 2 === 0) return 'even'
    else return 'odd'
}
console.log(checkEvenOdd(10));

// 🔹 Problem 2: Maximum Finder
function maxFinder(num1,num2,num3) {
    return Math.max(num1,num2,num3)
}
console.log(maxFinder(1200,35,258));

// 🔹 Problem 3: Array Sum Calculator
let total = 0
function arrSum(arr) {
    for(let val of arr){
        total += val
    }
    return total
}
console.log(arrSum([10,20,30,40,50]));

// 🔹 Problem 4: Object Destructure Function
function printUserInfo(userObj) {
    let {name,age,city} = userObj
    return `${name}, ${age} years old, lives in ${city}`
}
console.log(printUserInfo({ name: "Hamza", age: 22, city: "Lahore" }));
