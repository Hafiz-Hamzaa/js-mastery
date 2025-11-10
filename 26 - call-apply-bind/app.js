// Lecture 26 : call , apply and bind in js
// call method : agr hame this ka nature ko change krna hai manually mtlb explicit tareeqe se to ham change krkste hai call method kai zarriye 
// understand with example:

function greet() {
    console.log(this); // ab yaha per this ki value window hogi lekin ham yaha per this ka nature change krkste hai use call method
}
greet() 

// without parameter
function anotherGreet() {
    console.log(`Hello ${this.name} `);
}

let obj = {name: "Hamza"}
anotherGreet.call(obj) // ab yaha se hamne obj refer krdia this ko ab this = obj kai hogya ab this.name ka mtlb obj.name huwa

// with parameters
function info(country) {
    console.log(`${this.name} lives in ${country} `);
}
const person = {name: 'Zaid'}
info.call(person,'Dubai')

// Another Example
const car = {
  brand: "Toyota"
};
function showDetails(model, year) {
  console.log(`${this.brand} ${model} (${year})`);
}
showDetails.call(car, "Corolla", 2022);

// bind : bind hame aik fnc return krta hai mtlb ye turant execute nh hota ye aik copy deta hai jokai ham aik var me isko store krlete hai or this ki value fixed/permanent krdeta hai

let myObj = {name:"Umer"}
function mygreet() {
    console.log(`${this.name} How are you`);
}
// call → turant execute hota hai
mygreet.call(myObj);  
// bind → ek function return karta hai
const myBindFnc = mygreet.bind(myObj);
// ab manually call karte hain
myBindFnc();  

// apply : bilkul call jesa hi hai bs aik difference hai arguments ka call me ham arguments comma separated dete hai or apply me ham array pass krte hai 

const student1 = {name: "Ali"}
const student2 = {name: "Hassan"}
let data = ['Pyhton Course',2025]
function enroll(course,year) {
    console.log(`${this.name} enrolled in ${course} (${year})`);   
}
enroll.apply(student1,['JS Course', 2020])
enroll.apply(student2,data)
