// Lecture 10 ----- Number and Maths
const score = 400 // primitve value
const myNum = 12.67
const num = new Number(400) // Number Object
console.log(num);

// Some Number Methods
console.log(num.toString().length); // 3
console.log(num.toFixed(2));
console.log(myNum.toPrecision(2)); // isme jitne number pass kiye utni hi value honi chahiye decimal se pehle wo dekhta hai zada tar 

// Maths in JS --- Math Methods
console.log(Math.abs(-10)); // negative to Positive
console.log(Math.round(4.3)); // round off 
console.log(Math.floor(Math.random() * 3)); // gives random numbetween 0 and 2
console.log(Math.floor(12.45)); // removes decimal number
console.log((Math.ceil(4.34))); // increase 1 +
console.log(Math.sqrt(25)); // 5
console.log(Math.max(21,6,8));
console.log(Math.min(2,5,4));

console.log('---------');

// The most use Math.random() in ------  JS
let min = 10
let max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min)); 

// ------- 2 mini real world problem
// 🎯 Random Dice Roller – 1 se 6 ke beech random number generate karo har click pe.
console.log('Dice Roller');
console.log(Math.ceil(Math.random() * 6));

// 💰 Price Rounding App – User se decimal price lo, aur usko Math.ceil() aur Math.floor() dono format me dikhao.
let askNum = +prompt('Enter a decimal value')
console.log(Math.ceil(askNum)); // 1 up
console.log(Math.floor(askNum)); // 1 down