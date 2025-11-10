// Lecture 25 : this keyword in js
// ---- the this keyword
// ---- this current execution context (yaani jis jagah code chal raha hai) ko refer karta hai.
// Lekin ye kis cheez ko refer karega, ye depend karta hai kaise function call hua hai, kaha likha hai.

// ---- this keyword ki kia kia value hoti hai agr ham is is kai ander use kre
// global scope 
console.log(this) // window hogi value
// Node.JS me this ki value --> {} hoti hai

// function scope
function abcd(){
    console.log(this) // window hogi value iski bh
}
abcd()

// method kai ander this ki value object hai
// aisa function jo object kai ander use ho usko ham method kehte hai

let obj = {
    name: "ali",
    age: 20,
    sayFunc : function(){
        console.log(this) // pora obj
        console.log(this.name)
    }
}
obj.sayFunc()

// event handler kai ander this ki value wo hoti hai jisper event listener lga ho jese abhi h1 per lga hai to h1 ka element hi this ki value hai 
const h1 = document.querySelector("h1")
h1.addEventListener('click', function(){
    console.log(this)
    // h1.style.color = 'red'
    this.style.color = 'green'
})

// Class ke andar this hamesha us instance (object) ko refer karta hai jo us class se banaya gaya ho.
class Abcd{
    constructor(name){
        this.name = name
    }
}
let user = new Abcd("Ayesha")
console.log(user) // this.name = name → this refers to user object.

// ------- Noted : kbh bh arrow function kai ander this keyword nh use krna qkai ye this keyword loose hojata hai or wo window kai braber hojata hai
// ----- Noted : regular fnc kai ander arrow fnc ho to this ki value object hai q arrow fnc parent fnc ki value hold krta hai
// ---- Noted : or agr arrow fnc kai ander regular fnc ho qkai regular fnc ka parent object hoga or wo obj global hai to window mile ga