// Lecture 06 ------ Summary
// ----------- Operations
// Arithmetic Operators
console.log(2+3);
console.log(2-5);
console.log(2**3); // exponenet 
console.log(2%5); // modulus - it gives remainder

// Unary Operaor
// pre mtlb pehle increase ya decarse kro 
// post mtlb pehle value use kro bad me usko increase ya decraese kro
let counter = 0
counter++ // 0
console.log(counter) // 1
console.log(++counter) // 2

// Why string to number confusing (Type Coercion)
console.log("2" + 1) // numb yaha string me convert hogya : 21
console.log(1 + 1 + "1") // 21
console.log("12" - 3); // 9 yaha per str ko numb me convert kia  qkai + operator do kaaam krta hai aik addition dosra concatenation ka 

// Comparison Operator
console.log(2 > 5);
console.log(2 == 2)
console.log(2 <= 3);  // ye sb basic comparision hai 

// but ye comparison thore tricky hai qkai yaha per conversion ajati hai or jo ap predict kr rahe hote ho wo result nh ata 
console.log(null > 0)
console.log(null === 0)
console.log(undefined < 0);
console.log("" == 0); // istrah kai comparison se ap avoide hi krna

// ye important comparision hota hai Loose vs Strict Comparison
console.log("25" == 25) // true qkai ye data type check nh krta
console.log("24" === 24 ); // false ye stricter version hai ye datatype bh check krta hai sth me 