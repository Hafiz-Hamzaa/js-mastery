// ----------- Lecture 13 : Objects in JS
// Part 1 Objects
// Objects: store relationl data info about 1 entities 

// agr apko aik symbol ko as a key set krna hai 
const mySym = Symbol("hobby")
const studentObj = {
    name: "Hamza", // key : value pairs behind the scene key bh strings considered krta hai
    age: 25,
    role: "FrontEnd Engineer",
    isLoggedIn: false,
    lastLoginHistory: ['Monday','Tuesday'],
    [mySym]: 'coding'
}
console.log(studentObj);
console.log(studentObj.name); // Dot Notation
console.log(studentObj['role']); // Square Bracket Notation
console.log(studentObj[mySym]);

// updated value:
studentObj.role = 'Full Stack Developer'
console.log(studentObj);
// Object.freeze(studentObj)
studentObj.role = 'UI UX Engineer' //  // ap yaha per chnage nh hoga qkai uper hamne freeze krdia hai object ko

// Object kai ander function bh define krkste hai obj kai ander fnc define krne ko method kehte hai
studentObj.greeting = function() {
    console.log('Hello user');
}
studentObj.greeting();

// inshallah functions agai cover hogai individually 

// this keyword ko ham bh use krkste hai object kai name na de to this de name se uska refrence ja rh hai this ko this mtlb "ye" and inshllah this per bh agai chlker individullay baat kregai abhi bs itna maloom krlo

studentObj.anotherGreeting = function() {
    console.log(`Hello i am ${this.name}`);
}
studentObj.anotherGreeting();
console.log('---------');

// 1️⃣ User Profile Updater
let userProfile = {
    name: "zaid",
    email: "zaid123@.com",
    isVerified: true,
    lastLoginDays: ['saturday','sunday'],
}
userProfile.email = 'zaid@abc.com'
userProfile.role = 'Full Stack Developer'
console.log(userProfile); // after chnages

// 2️⃣ Symbol Property Test
let secreteCode = Symbol("secrete code")
userProfile[secreteCode] = '12345'
console.log(userProfile[secreteCode]);

// 3️⃣ Login History Tracker
const account = {
    userName: 'umer',
    isLoggedIn: true,
    loginDays: ['monday','tuesday','friday','saturday'],
    showLastLogin: function() {
        console.log( `The last login on ${this.loginDays[this.loginDays.length - 1]}`); // yaha per hardcode dete to maza nh ata last ele nikalne ka code simple (lenght - 1)
    }
}
account.showLastLogin()

// 4️⃣ Dynamic Key Access
let keyName = 'color'
const carObject = {
    name: 'toyota',
    model: 2010,
    [keyName]: 'black'
}
console.log(carObject[keyName]);


// Part 2 ---- Objects

// const obj = new Object() it is a singleton object and first way to create this
// const obj = {}  it is non singleton object and second way to create object like this

const obj = {
    email: "some@abc.com",
    fullName: {
        userName:{
            firstName: "Hafiz",
            lastName: "Hamza"
        }
    }
}
console.log(obj.fullName.userName.firstName); // deep access
console.log(obj.fullName.userName?.lastName); // optional chaining kia hai kai agr apne ? mark lgadia iska mtlb ye hai kai agr ye property exist nh krti to ap hame error nh dena jese kai (cannot read properties) ? se ye huwa kai hame wo undefined dega 

// combine one or multiple objects together using Object.assign() or spread operator
const obj1 = {1:'a',2:'b',3:'c'}
const obj2 = {4:'d',5:'e',6:'f'}
const obj3 = {...obj1,...obj2} // spread operator through
const obj4 = Object.assign(obj1,obj2) // Object.assign()
console.log(obj3);
console.log(obj4);

console.log(Object.keys(account)); // Object.keys gives all keys as an objects or ye sb keys aik array me convert krdeta hai 
console.log(Object.values(account)); // Object.values gives all values as an objects or  ye sb keys aik array me convert krdeta hai 
console.log(Object.entries(userProfile)); // Object.entries ye rarely kaam used hota hai but ye hame array of arrays deta har aik single property ko array me wrap krdeta hai
console.log(userProfile.hasOwnProperty('isVerified')); // hasOwnProperty check the key exist or not --- boolean values deta hai

// 1️⃣ Nested Data Access:
// Create an object library that stores a book with title, author, and inside it, another object publisher with name and year.
// → Print publisher’s name using deep access.
const book = {
    title: 'Harry potter',
    author: {
        publisher: 'John',
        year: 2010
    }
}
console.log(book.author?.publisher);

// 3️⃣ Dynamic Check:
// Create an object car, check agar uske andar color property exist karti hai (hasOwnProperty use kar), agar nahi karti to color = "Black" add kar do.
const car = {
    name: 'Alto',
    // color: 'white'
}
if(car.hasOwnProperty('color')){
    console.log('Yes color property exist');
}else{
    console.log(car.color = 'black');
}