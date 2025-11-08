// Lecture 24 : Lexical Scoping in JS
// Lexical Scoping JS : Inner function apne parent (outer) function ke variables ko access kar sakta hai, par parent function inner function ke variables ko access nahi kar sakta.

// function outer() {
//     let a = 10
//     function inner() {
//         let b = 20
//         console.log(a + b); // 30
//     }
//     inner()
//     // console.log(b); b is not defined
// }
// outer()

let num = 100;
function foo() {
    console.log(num);
}

function bar() {
    let num = 200;
    foo();
}

bar();

// foo() call ho raha hai inside bar, lekin lexical scope decide krta hai function ke definition ke hisaab se, call ke hisaab se nahi

// Closure Def : Inner function outer function ke variables ko “yaad rakhta hai”.
// ✅ Closure ke main points :
// Inner function outer function ke variables ko access kar sakta hai
// Outer function execute ho chuka ho, to outer me jo var the wo bh khatam hojana chahiye lekin  phir bhi inner function variables yaad rakhta hai qkai uskai pass outer ka reference hota hai
// Use: Private variables, counters, function factories, memoization

function outer() {
    let count = 0
    function innner() {
        count++
        console.log(count);
    }
    return innner
}
let fnc = outer()
fnc()
fnc()
fnc()

let fnc2 = outer()
fnc2()
fnc2()

// Har outer() call ek naya closure environment create hota hai Isliye fnc aur fnc2 ke count alag hote hain