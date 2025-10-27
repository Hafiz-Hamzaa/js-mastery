// Lecture 09 ------  Strings in JavaScript
let userName = 'Hamza'
let userAge = 25
// console.log("My name is ",userName, " and I am ",userAge," years old"); old version ES5 
// (Template Literals) ---- string interpolation kehte hai isko ham var ko inject krdete hai ham single string me 
// console.log(`My name is ${userName} and I am ${userAge} years old`); // ES6 - Modern way 

// Practice : 
let productName = 'camera'
let quantity = 15
let price = 5000
let total = quantity * price
console.log(`You bought ${quantity} of ${productName} for ${5000} rupees.`);
console.log(`Your total bill should be : ${total}`);

// Length Propert : ye apko btatai hai string kai ander kitne number of total chracetrs hai even ye space ko bh count krega
let myName = "Muhammad Hamza"
console.log(`The name of my length should be: ${myName.length}`);

// ✅ Primitive values immutable hoti hain, aur string ek primitive data type hai — isliye string ke upar koi method lagane se original string kabhi change nahi hoti. Har string method ek new string return karta hai.

// String Methods 
// 🧠 String Method–Based Problem Statements (Engineer Style)

// 🔹 Level 1 – Warm-Up (Direct Manipulation)
// Ek string lo " JavaScript " → usme se extra spaces hatao, aur final string ka length print karo.
let str = "  JavaScript  "
let removeWhiteSpaces = str.trim();
console.log(removeWhiteSpaces.length);

// // "coding" aur "is fun" ko combine karke ek single sentence banao using any string joining method.
let firstWord = "coding"
let secondWord = " is fun"
console.log(firstWord.concat(secondWord));

// // "Frontend" string ke last 3 letters nikal kar alag variable me store karo.
let techStack = "Frontend"
// let extractWord = techStack.slice(5) // first way
let extractWord = techStack.slice(-3) // second way : slice me ham negative valu bh deskte lekin substring method me allow nh hai
console.log(extractWord);

// // Ek string "FullStack" lo, uska first half aur second half alag print karo (use length property to find midpoint).
let role = "FullStack"
let firstHalf = role.slice(0,4)
let secondHalf = role.slice(4)
console.log(firstHalf);
console.log(secondHalf);
console.log(role.length / 2); // mid point of this string should be : 4.5

// // "I love JavaScript" me "love" ko uppercase me convert karke baaki sentence same rehne do.
let loveText = "I love JavaScript"
let copyLove = `${loveText.slice(0,1)} ${loveText.slice(2,6).toUpperCase()} ${loveText.slice(6)}`
console.log(copyLove);

// // "Backend" aur "Developer" dono ko combine karo aur unke beech ek hyphen (-) add karo using string methods only.
let role1 = "Backend"
let role2 = " Developer"
let combineRole = role1.concat( role2)
console.log(combineRole.replace(" ","-"));

// Ek string "Hello JavaScript Developer" me check karo: Kya "Script" word exist karta hai? Kya "Python" word exist karta hai?
let sentence = "Hello JavaScript Developer"
console.log(sentence.includes("Script"));
console.log(sentence.includes("Python"));

// "I am learning JavaScript everyday" Sentence ko words me split karo. Usme total words count karo using array property.
let sent = "I am learning JavaScript"
let breakWords = sent.split(" ")
console.log(breakWords);
console.log(breakWords.length);

// "HTML,CSS,JavaScript,React" Isko ek array me convert karo. Phir array ke elements ko " | " se join karke ek single string bana do.
let frontEndStack = "HTML CSS JavaScript React"
let splitWords = frontEndStack.split(" ").join(" | ")
console.log(splitWords);

// Har word ka first letter uppercase me convert karo ---- "openai chatgpt is the best ai tool"
let aiDesc = "openai chatgpt is the best ai tool"
let breakArr = aiDesc.split(" ")
let emptyStr = ""
for(let val of breakArr){
    emptyStr += `${val.charAt(0).toUpperCase()}${val.slice(1)} `;
}
console.log(emptyStr);

// Word Reverser ---- Input: "I love JavaScript"  → Output: "JavaScript love I"
let input = "I love JavaScript"
let revOrder = input.split(" ").reverse().join(" ")
console.log(revOrder);

// replaces word of hammad with sufiyan
let string = "Hammad's name : I am muhammad hammad my mother call me as  muhammad hammad and my father call me as hammad";
let breakWord = string.split(" ")
let firstWor = breakWord[0].charAt(0).toLowerCase()+breakWord[0].slice(1)+ " " +breakWord.slice(1).join(" ")
console.log(string);
console.log(firstWor);
let result = firstWor.replaceAll("hammad's","sufiyan's").replaceAll(" hammad"," sufiyan");
console.log(result);
