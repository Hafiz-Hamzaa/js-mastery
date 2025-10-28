// Lecture 12 ------ Arrays in JavaScript
// It is a Reference Data Type -- Arrays are mutable

// Part 1 Array in JS

// new Array(1,2,3) is an alternative way to create array
const myArr = ['banana' , 'orange' , 'apple']
myArr[3] = 'grapes' // beacause array are mutable
console.log(myArr);
console.log(myArr[1]); // access elements - index starts with 0 || or agr koi aisa index nhmber dedia jo exist nh krt to undefined dega
console.log(myArr.length); // property Counts number of elements in the array

// Shallow Vs Deep Copy
// 🔹 Shallow Copy (Surface level copy)
// Shallow copy ka matlab — ek naya array ban jaata hai, lekin agar uske andar nested objects ya arrays hain to unka reference hi copy hota hai (deeply nahi) mtlb nested array still refrence hi rahe ga uskai uper kai ele ki cpuy ajai gi. using (... spread operator)

// 🔹 Deep Copy (Complete independent copy)
// Deep copy matlab: array ke andar jitne nested objects/arrays hain, sabka alag copy banta hai — koi reference share nahi hota. (Using JSON.parse(JSON.stringify(array)))

// Array Basc Methods --- 
// Point to be Noted : kuch methods original array me change krte hai or kuch new array return krtehai

let students = ['hamza','ali','amna']
students.push('ayesha') // last me ele add krta hai or return length krta hai
students.pop() // last se el remove krta hai or remove huwa ele return krta ha
students.unshift('zaid') // start me el add krta hai or return length krta hai
students.shift() // start se el remove krta hai or remove huwa ele return krta ha
students.join() // array ko string me convert krdeta hai
students.slice(0,2) // inclusive and exlusive(oprional) : starting count and last count but last count ignore hojata hai us se pehel tak copy deta hai or ye new arrays deta hai original same reht hai
students.splice(0,1,2) // start , delCount , addEle
students.concat(['saba','areesha'])

// methods to bohat sare ha but basic hamne yaha cover kiye ab jb kis bh method ka usecase arha hu ap search krkai placed krskte hao for future making projects 

// Deep vs Shallow Copy Check\
let nested = [["html", "css"], ["js", "react"]];
let shallowCopy = [...nested]
shallowCopy[1][1] = 'nextjs' // change huwa hai qkai nested array hai isliye nested still reference rehjati hai beshal spread operator q na ho agr simple array hota phr arram se copy miljati

let alpha = ["a", "b", ["c", "d"]]
let deepCopy = JSON.parse(JSON.stringify(alpha))
deepCopy.push('hello') // chnagses reflect nh hoga qkai deep copy bani hai

// Spread Operator use to create shallow copy and also merge the two or more arrays etc
let role = ['frontend','backend','designer']
let otherRole = ['engineer','developer']
let allRole = [...role,...otherRole]
console.log(allRole); // you can also conact but most of the time we use spread operator 

console.log(Array.isArray('programming')); // ye check krta hai kai ye array waqi me hai ya nh or jb ha ya na ki baat ajao to hamesha boolean values return krta hai
console.log(Array.from('Hamza')); // yaha per array me convert bh krste hai