// Lecture 07 Summary : Data Types -- Revision
// Primtive VS Reference (Non Primtive)

// Primtive Data types (by value) : isme directly value copy hojati hai or agr apne copy wali value kai ander koi change kia ro original me koi change nh hoga

let userName = "Hamza" // string
let userAge = 23 // number
let isLoggedIn = true // boolean
let userState; // undefined
let userScore = null // null - null type is object
let id = Symbol('1123')
let anotherId = Symbol('1123') // symbol uniqueness
console.log(id === anotherId); // false qkai unique hai dono dekhne me to same value hai but unuqe hai
let bigNumber = 47567465746764n // bigint

// you can check any datatype by using typeof keyword
// For Example : 
console.log(typeof bigNumber); // bigint


// Refernce Data Types (by reference) : but isme aisa nh hota isme refernce copy hota hai agr copy wale kai ander koi chnages hoi to wo original me bh refletc krega
// Objects , Arrays , Functions
// Inshallah comin soon we will dicuss individually in details ()
let fruits = ['apple' , 'mango' , 'pear']
let myObj = {
    name: 'ali',
    age: 23
}
let myFnc = function() {
    console.log('hello');
}
myFnc() // call or invoke functions
console.log(typeof fruits); // object
console.log(typeof myFnc); // function: but ham kehte hai function object
console.log(typeof myObj); // object