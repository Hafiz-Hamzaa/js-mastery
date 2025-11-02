// Lecture 16 : Control Flow in JS : Code esecute based on some condition

// Conditional Statements : if , else if , else (comparision , logical checking condtion)
const userLoogedIn = true
if(userLoogedIn){
    console.log('Welcome to my website');
}else{
    console.log('You are not loggedin');
}

// switch statement : single expression ki based per different cases evaluate krna
const day = "Monday"
switch (day) {
    case "Monday":
        console.log('Go to School');
        break;
    case "Tuesday":
        console.log('Go to College');
        break;
    case "Wednesday":
        console.log('Go to Park');
        break;
    default:
        console.log('Invalid day');
        break;
}

// truthy vs falsy value : falsy value : "" , false , undefined , null , NaN , 0 , remaing values all are true

// Nullish Coalescing operator (??) : null undefined JavaScript me nullish coalescing operator (??) use hota hai default value dene ke liye — sirf tab jab koi value null ya undefined ho.
const value = undefined
let res = value ?? "Hamza"
console.log(res);

// Ternar Operator : short hand alternate if else
let age = 20
let out = age >= 18 ? "Vote" : "Don't Vote"
console.log(out);

// IIFE (Immediately Invoked Function Expression) : usecase private variables and in last put semicolon to end a func agr ap do IIFE aik sth likhdogai bina semicolon lgai to execute nh hoga

(function hello() {
    console.log('hello');
})();

((name) => {
    console.log(`Hello ${name}`);  
})("umer");

// IIFE ka sabse bada use hota hai scope isolation — Taake variables global scope me na jayein.
(() => {
    let secretCode = 1234
    console.log(secretCode);
})();
// console.log(secretCode); is not defined yaha acceess nh hai yehi asal IIFE ka use

// 🎯 Control Flow Practice Problems
// Login Check System
let isLoogedIn = true
let isVerified = false
if(isLoogedIn && isVerified){
    console.log("Access Granted");
}else if(isLoogedIn || isVerified){
    console.log("Verify your Account First");
}else{
    console.log("Please Login");
}

// Nullish Value Checker
let userName = null
let checkValue = userName ?? "Hamza"
console.log(`Welcome ${checkValue}`);

// Private Data IIFE
(() => {
    let secretPin = "1590"
    console.log(secretPin);
})
// console.log(secretPin);

function canDrive(age,hasLicense) {
    if(age >= 18){
        if(hasLicense){
            console.log("You can drive!");
        }else{
            console.log("Get your license first");
        }
    }else{
        console.log("You are too young to drive");
    }
}
canDrive(20,true)

function calculateBill(amount,isMember) {
    if(isMember){
        let discount = (amount * 10) / 100
        console.log(discount);
    }else{
        console.log(`Your final bill amount : ${amount}`);
    }
}
calculateBill(14000,"")