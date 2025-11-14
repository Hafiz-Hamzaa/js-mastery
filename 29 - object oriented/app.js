// Lecture 29 : Object Oriented JS
// Objects : have properties and methods available

// Prototype : har object kai ander aik special type prototype hoti hai jiskai ander uch properties and methods hote hai . Ab hame khud kai protoytpe bh set krkste hai .__proto__ se mtlb aik object kai methods dosre object me bh use krkste hai uska reference jata hai us object ka .

const employee = {
    calcTax(){
        console.log('The rate is 10%');
    }
}

const umer = {
    salary: 45000,
}
umer.__proto__ = employee
// Note : agr object and prototype kai pas smae methods hoga to hamesha win krega object priority uski hogi hamehsa


// Classes and Objects
// Classes : mtlb ham aik Class banaskte hai mtlb aik blueprint jiskai zariye ham different objects create krkste hai thorugh class

class Car {
    start(){
        console.log('start car');
    }
    stop(){
        console.log('stop a car');
    }
    setBrand(brand){
        this.brand = brand // this.brand (property) = brand (value) har aik individual object kai liye jitne ham create kre
    }
}
let fortuner = new Car // yaha hamne aik instance banay object though class
fortuner.setBrand("fortuner")

let lexus = new Car()
lexus.setBrand("lexus")


// constructor method : ye automatically create hota hai or invoked bh agr ham class kai ander na bh banai but ham apna custom constructor bh create krkste hai iska purpose intialize an object shoroat me kuch kaam krana ho 

class sports {
    constructor(sp1,sp2) {
        console.log('Welcome to my Sports Actvity');
        this.sp1 = sp1
        this.sp2 = sp2
    }
    foodFestival(){
        console.log('review different dishes');
    }
}
let person1 = new sports('football','cricket')


// Inheritnace : parents class ki sari propeties and methods child inherit krskta hai
// class person{
//     eat(){
//         console.log('eat');
//     }
//     sleep(){
//         console.log('sleep')
//     }
//     work(){
//         console.log('do nothing')
//     }
// }
// class engineer extends person{
//     work(){
//         console.log('solve problems , build something');
//     }
// }
// let hamza = new engineer
// Noted : parent and child kai pass same method ho to hamesha child method win krega called "Method Overriding"

// super keyword : agr hame child me koi constructor bana rahe hai to us se pehle zaroori hota hai kai hame pehle parent kai contructor ko invoke krna hoa hai thorugh super(); phr ham child ka contructor create or use krkste hai

class person{
    constructor(name){
        this.name = name
    }
    eat(){
        console.log('eat');
    }
    sleep(){
        console.log('sleep')
    }
    work(){
        console.log('do nothing')
    }
}
let myPerson = new person("Hassan")

class engineer extends person{
    constructor(){
        super()
        console.log('Child contructor');
    }
    work(){
        console.log('solve problems , build something');
    }
}
let hamza = new engineer