// Lecture 11 : -------------- Dates in JS

// Dates represent in milisec -- JS Date started at (JAN 1,1970)
// Noted : Jb ap new Date se date nikalte ho to yad rkhna current jo date hoti hai or time wo ata hai lekin ye apkai computer ki date and time ko dekh kr deta hai yad rkhna ab for example koi is date ko kisi or country me date nikale ga to uska Time Zone alag hoga bs ye yad rkhne

let myDate = new Date() // It represent the date object and it have different methods available
// different representation to print dates in JS
myDate.toDateString()
myDate.toISOString()
myDate.toJSON()
myDate.toLocaleDateString()
myDate.toLocaleString() 

// Ap Custom Date bh apni rkhskte ho in different formats
let date = new Date("2022-05-15")
let myCreatedDate = new Date(2020,0,25)
console.log(date.toLocaleString()); // 5/15/2022, 5:00:00 AM
console.log(myCreatedDate.toDateString()); // Fri Dec 25 2020
console.log(myCreatedDate.toLocaleDateString()); // 12/25/2020

// Timestamps
let timeStamps = Date.now()
console.log(timeStamps); // it gives milisec
console.log(Math.floor(timeStamps / 1000)); // convert milisec to sec
console.log('--------');

// Explore Date Methods in JS 
let dateMethods = new Date
console.log(dateMethods.getDay()); // starts with 0 and 0 become Sunday (0-6) -- Sun - Sat
console.log(dateMethods.getDate());
console.log(dateMethods.getFullYear());
console.log(dateMethods.getHours());
console.log(dateMethods.getMonth()); // // Jan considerd 0 and Dec - 11 (0-11) -- Jan - Dec
console.log(dateMethods.getMinutes()); // and so on..........


// ----------- Age Calculator
let userBirhtYear = +prompt('Enter your Birth Year')
let currentYear = new Date()
console.log(`Your age should be : ${currentYear.getFullYear() - userBirhtYear}`);

// ---------- Random Future Date Generator
let addDays = +prompt("Enter days to add:");
let current = new Date();
current.setDate(current.getDate() + addDays)
console.log(`Your Future Date should be : ${current.toDateString()}`);