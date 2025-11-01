//  Lecture 15 : Scopes in JS
// Global Scope : var global scope hai and function scope hai mtlb apko kahi bh function kai ander var se var dekha to wo sirf fnc kai ander hi access hoga yad rahe ye baat sir fnc ki baat ho rh hai 

// Block  Scope : let , const block scope hai fnc kai block ka ilwa jitne bh scope hai jese if loop ka scope to let const sirf usi scope kai ander acccess hogai 

// Local scope : fnc kai ander var , let , const se koi bh var bana hai to unka scope local hai mtlb jese fnc call huwa unka scope khatam temporaray hota hai wo kbh bh bahar access nh hogai 

if(true){
    let a = 12
    const b = 10
    var c = 20
}
// console.log(a); // a is not defined 
console.log(c); // global ha yad hai ya availabe hai qkai fnc ka scope nh hai ye 

function accessVal() {
    let x = 20
}
// console.log(x); //  x is not defined ye sirf fnc kai ander access hai 

if(true){
    const username = "Hamza"
    if(username === "Hamza"){
        const website = " Youtube"
        console.log(username + website)
    }
    // console.log(website); // website is not defined
}
// console.log(username); // username is not defined

// Mini Hoisting =>Declaration uper chli jati hai initiliazation nh  just overview
console.log(addOne(12)); // executed function statement hoist hojata hai
function addOne(num) {
    return num + 1
}

// function expresson hoist nh hota
// addTwo(20)   Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num + 2
}

// abhi bs itna sa ap overview lo agai further baat kregai

function myFnc(){
    if(true){
        let user_name = "Hamza"
        var age = 24
    }
    // console.log(user_name); is not defined
    console.log(age); // access var qkai fnc kai block me hai 
}
myFnc()