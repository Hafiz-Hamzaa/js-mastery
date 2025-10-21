// Lecture 04 - Summary

// ECMA Standard - Initially Jab JS develop hoi to multiple browsers me multiple way me chlti thi kisi me kuch code nh chlta to kisi me chl jata phr aia huwa kai aik Standara aya market JS ka ECMA Standard - 1 isse huwa ye kai sb browsers me JS execute shai tareeqe se hone lagi or sb aik hi standard ko follow krn lage ab New Versions atai rehte hai or jo sbse bara chnage aya mtlb sbse zada features develop hoi wo tha ES6 (jisko ajkai time me Modern JS) b kehte hai ES5 me bohat sare problems thi 

"use strict"; // Treat All JS Code newer version
// alert(2+3) ; Error : Because We are using Node.JS not Browser

console.log(2 
    + 3
) // code readabilty should be higher

// Data types : 2 Categories - Primitive VS Non-Primtive
// Primitive Data Types (string , bool , number , undefined , null , symbol(for uniqueness rarely used) , bigint(rearly used))
let name = 'Ali'
let age = 21
let isLoggedIn = false
let state;
let id = null // developer set intentionaly 
let unique = Symbol('Uniqueness')
let bigNum = 123456789n
console.log(typeof id) // object 

// Non Primtive (Objects) - Functions , Array

// 🧩 Lecture 04 – Practice Challenges (Primitive Data Types Only)
// 🔹 Challenge 1 – Type Checker
// 👉 Create 7 variables (for all primitive data types).
// Use typeof and console.table() to display their types neatly.
console.table({
    nameType : typeof name,
    ageType : typeof age,
    isLoggedInType : typeof isLoggedIn,
    stateType : typeof state,
    idType : typeof id,
    uniqueType : typeof unique,
    bigNumType : typeof bigNum
})

// 🔹 Challenge 2 – Type Conversion Trap
// 👉 Declare a string number like "10". Convert it into a real number and add another number with it.
// Phir dono ko + operator ke sath use karke dekhna difference kya aata hai.
// Goal: Understand loosely typed language ka behavior (type coercion).
let num = "10"
let convertedNum = Number(num)
console.log(num + convertedNum); // 1010 - Its a type coercion