// Lecture 08 --- Summary
// JS kai ander memory allocate ka concept smjhiye.......

// ------------  Stack  VS Heap Memory
// Stack Memry me hame Primitive values milti hai or isme hame uski copy milti hai agr copy me chnage hota hai to original per koi affect nh parta

let a = 12
let b = a
b = 15
console.log(a); // 12
console.log(b); // 15

// Heap Memory me hame Non Primitive values milti hai or isme ham copy nh reference milta hai bs qkai agr ap refrence pass krta ho alag dono variables same memory location ko point karte hain.or agr apne dosre var me koi cheez change kri to original me bh offcourse changes hojai gai qkai dono ka refernce same hai

let obj1 = {
    userName: 'Hassan',
    userEmail: 'hassan@123.com'
}
let obj2 = obj1
obj2.userEmail = 'umer@abc.in'
console.log(obj1.userEmail); // umer@abc.in
console.log(obj2.userEmail); //  umer@abc.in

// simple yehi tha memory ka concept and sth me apko me ne practically krkai bh dekhadia 

// Note : Primitive values are immutable(unchangeable) mtlb chnage nh hoskti unki value || Non Primtive values are mutable (changeable)