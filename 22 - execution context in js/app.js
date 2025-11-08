// Lecture 22 : Most Important Conceptual Topic in JavaScript 

// ----------------- V8 Engine -----------------------------
// What is v8 engine
// “V8 is Google’s JavaScript engine that compiles JavaScript code into machine code means CPU undertand easily (0 and 1) so the browser or Node.js can execute it efficiently.”
// JS Code (human readable) → V8 Engine → Machine Code (0s & 1s) → CPU executes → Result

// ------------------- JS Code Execution -------------------- 
// 1️⃣ JS Code kaise execute hota hai?
// JS single-threaded aur interpreted language hai
// JS ka code line by line execute hota hai
// Har ek JS code ko execute karne ke liye Execution Context create hota hai

// 2️⃣ Execution Context kya hai?
// Definition: Execution Context ek environment hai jisme JS code run hota hai
// Ye decide karta hai:
// Kaunse variables aur functions accessible hain
// Kaunse scope me code execute ho raha hai

// Types of Execution Context:
// Global Execution Context (GEC):
// JS code ka main context
// Browser me ye window object ke saath link hota hai
// Sirf 1 baar create hota hai

// Function Execution Context (FEC):
// Jab function call hota hai → uske liye alag context create hota hai
// Eval Execution Context:
// Rarely use hota hai, jab eval() function me code run hota hai

// 3️⃣ Execution Context me kya hota hai?
// Variable Environment: Variables aur functions ka record
// Scope Chain: Outer variables tak access
// this Value: Current context ka this

// 4️⃣ Execution ka Process (Simplified)
// Creation Phase (Memory Allocation):
// Variables aur functions allocate hote hain
// Functions fully memory me store ho jati hain
// Variables undefined se initialize hote hain

// Execution Phase (Code Execution):
// Line by line code execute hota hai
// Variables ko actual values milti hain

// Example:

// let a = 10;
// function greet(){
//   console.log("Hello!");
// }
// greet();

// Global Execution Context create hoga
// Memory me a=undefined, greet=function store hoga
// Execution phase: a=10 assign hoga, greet() call hoga → "Hello!" print

// 1️⃣ Function ka apna Execution Context
// Har function call pe JS engine naya execution context create karta hai
// Ye alagtah memory space hota hai us function ke variables aur this ke liye
// Matlab ek function ke andar jo variables hain, wo sirf usi function ke liye accessible hain