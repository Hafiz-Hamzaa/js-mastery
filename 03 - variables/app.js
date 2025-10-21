// 🧠 Lecture 03 — Deep Summary (by Umer 💻)
// 📌 Variables (Memory Space / Container for Data) : JavaScript me variables ka kaam hota hai data ko temporarily memory me store karna taake hum use program ke andar use kar saken.
// let : not re-declared just re-assign (ES-6 Feature)
// const : no re-declare and re-assign and const must be initialized (ES-6 Feature)
// var : re-decalred and re-assign both are allow and this is the biggest problem that we found in (ES5) 
const accountId = 12468
let accountEmail = 'umer@abc.com'
var accountPassword = '12345'
accountCity = 'Lahore'
console.log(accountId) // 12468
let accountState; // agr apne var declared kia or koi value assign nh kri to javascript by default aik value dega jokai hogi : undefined

// accountId = 35789  not allowed : Assignment to constant variable
accountEmail = 'owais@abc.in'
accountCity = 'Multan' // aise bh krkste hai bina keyword kai but this is not professional code and aik baat or JS is Loosely Typed / Dynamically Typed Language wo kese qkai hame btana nh parta pehle se isme konsa data stored hoga ap kuch bh data stored krkste ho 
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]); // console.table() ek helpful debugging method hai jo multiple variables ko table format me show karta hai.
console.log(typeof accountEmail); // typeof keyword se ham kiis bh var ka data type check krkste hai


// ------------------ |||| -----------------------

// 🧠 PRACTICE SET – “Variables & Thinking Like an Engineer”
// 🧩 Level 1: Basic Hands-On

// 1- Create variables using var, let, and const.
// Try to re-declare each one — observe which one gives error.
// Try to re-assign — observe which one gives error.
// Write comment beside each experiment (✅ or ❌).
var userName = 'Hamza'
let userAge = 21
const userCity = 'Faislabad'
var userName = 'Umer'   // allowed 
// let userAge;          error cannot re-declare 
// const userCity;       also give an error already declared


// 2- Declare a variable without assigning any value.
// Log it → see what JS prints.
// Then assign a value → log again → observe type change using typeof.
let fruit;
console.log(fruit , "-" , typeof fruit) // undefined
fruit = 'mango'
console.log(fruit , "-" , typeof fruit)

// 3- Make a mini table:
const name = 'Zaid'
let age = 22
var role = 'Developer'
console.table({name,age,role})

// ⚙️ Level 2: Logic Practice
// 4- Suppose a user’s account data changes during program execution.
// Which variables should you declare with let, which with const?
// Think: Why userId → const, and userEmail → let?
// Answer : ham use kregai let qkai let re-assign hame krne deta hai jbake const ye allowed nh krta || userId isliye const me store hai qkai id unique hoti hai har aik kai liye wo kbhi chnage nh hoti but userEmail kisi bh time change hoksti hai thats why stored in let varibale

// 5- Write a program that shows:
// “Before update” values in console.table
// Then reassign some variables
// Then show “After update” in console.table
// ➜ This helps you think like a state-change tracker (exactly what devs do in React later).
const user_name = 'Arif'
var userCountry = 'Pakistan'
let userSalary = 100000
console.table([user_name,userCountry,userSalary])
userSalary = 200000
userCountry = 'Dubai'
console.table({user_name,userCountry,userSalary})

console.log('------------------')

// 🚀 Level 3: Real-World Thinking (Bonus)
// 6- Imagine you’re making a simple bank account system:
// Print all values with console.table
// Withdraw 1000 → update balance
// Deactivate account → set isActive = false
// Print final state again

const bank_name = 'HBL'
let isActive = true
const account_id = 212334
let balance = 5000
console.table({bank_name,isActive,account_id,balance});
balance -= 1000
isActive = false
console.table({bank_name,isActive,account_id,"Updated Balance": balance})