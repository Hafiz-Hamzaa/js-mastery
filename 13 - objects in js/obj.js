// Object Part 3
console.log('------- Object Part 3 --------');

// 🧠 Destructuring–Based Problems (Real Developer Style)
// 🔹 Problem 1: Course Info Extractor
const courseDetails = {
    title: "JS Mastery",
    duration: "20 hours",
    instructor: "Hafiz Hamza",
    price: 12000,
}
const {title,instructor} = courseDetails
console.log(`The Course ${title} is taught by ${instructor}`);

// 🔹 Problem 2: Top Student Finder
const data = [
 { name: "Ali", score: 88 },
 { name: "Hamza", score: 95 },
 { name: "Ayesha", score: 90 }
]
const [,secondEle] = data
console.log(`${secondEle.name} score ${secondEle.score} marks`);

// 🔹 Problem 3: Nested Object Destructuring
const employe = {
    address: {
        city: 'Lahore',
        country: 'Pakistan',
    }
}
const {city,country} = employe.address
console.log(`Employee live in ${city}, ${country}`);

// 🔹 Problem 4: Extract Specific Data from Complex Object
const user = {
  id: 1,
  info: {
    name: "Zaid",
    skills: ["HTML", "CSS", "JavaScript"]
  }
}
const {name,skills} = user.info
console.log(`${name} top skills is ${skills[2]}`);

// 🔹 Problem 5: Skipping Array Values
const colors = ["red", "green", "blue", "yellow", "purple"]
const [,secEle,,,fivEle] = colors
console.log(`Selected colors are ${secEle} and ${fivEle}`);


// 🔹 Problem 6: Swap Variables Using Destructuring
let a = 10 , b = 20
console.log(`Before swap a = ${a} and b = ${b}`);
[a , b] = [b , a]
console.log(`After swap a = ${a} and b = ${b}`);

// Brief Intro to JSON API -- ham bs yaha per thora smje gai practical inshallah ane wale time kregai

// API : kuch bh nh apna kaam kisi kai sar per rkhdena jese ap restaurent gai waiter aya waiter ko apne kia kia order krna hai wo btadia mtlb usko request dedi wo gya kitchen me smjo server smjlo waha se wo data response me agya hamare pass yani hmara khana (Request and Response Cycle Process)

// Phele time me data hame XML Format me ata tha but ab JSON Format me ata hai
// JSON Format
// {
//     "name":'ali',
//     "age":"24"
// }

// ab zaroori nh hai kai exact data isi format me aiga sometime or zada tar
// Array of Objects me bh ata hai : [{}]

// bs abhi kai liye itna hi smjo ap 