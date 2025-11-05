// Lecture 19 : DOM in JS

// DOM Introduction
// DOM (Document Object Model) : apka html document pora html me har aik cheez DOM me node kehlati hai . window object hota hai jiskai ander document hota hai window global object hota hai isliye hm window.alert ya kuhc bh nh likhte direct likhte hai 

// DOM means : Tree like structure 
// document , html , head , body etc........

// 3 types of node 
// element node , text node , comment node

// DOM Manupulation
// DOM Selectors , Nodelist , HTML Collection

// Selecting elements by id , class , tags , queryselector , queryselectorAll etc.....
const mypara = document.getElementById('para')
mypara.style.backgroundColor = 'green' // style node 

// elements : ye hame HTML Collection deta hai just like an array exact not array or isper ham foreach , map nh lgaskte ha for loop basic lga skte hai qkai lenght deta hai lekin ham isko array me convert krskte hai kese 
const ulst = document.getElementsByClassName('list')
const convertArr = Array.from(ulst)
convertArr.forEach((ele) => ele.style.color = 'orange')

// query selector : return first ele
// query selectorAll : return Nodelist or isper bs forach lgakste hai lekin convert krdo agr krna ho

// innerText : ye hame bs visible text deta hai
// textContent : ye hame hidden bh deta hai text
// innerHTML : isme ham HML bh likh skte hai

// getAttr , setAttr , hasAttr etc....
const para = document.getElementById('para')
para.getAttribute('id')
para.setAttribute('id','myPara')
para.hasAttribute('id') // true


// Relationship between Child to Parent and with siblings etc
// use always children , nextelementsibling , previouselementsibling , firstelementsibling , lastelementsibling beacuse ye apko direct element node dete hai text node nh dete junk artifact jis kehte hai is se ye faida inhi kai zirye ap selecting waghera move down up krkste hai

// create element and append means after , prepend child means before 
let h1 = document.createElement('h1')
h1.textContent = "Hello I am learning DOM"
document.body.appendChild(h1)

let img = document.createElement('img')
img.setAttribute('src','https://tse4.mm.bing.net/th/id/OIP.8lG71Gr7LODSWlZITL-NfwHaHa?pid=Api&P=0&h=220')
document.body.prepend(img)

// remove child
let p = document.createElement('p')
p.textContent = 'Hello I am Hafiz Hamza and I am a Front End Engineer'
document.body.appendChild(p) // add done
p.remove() // remove


// real life uage : 
let arrFood = ['Sabzi','Chawal','Mutton','Ghost','Ghee']
let ul = document.querySelector('ul')
const foodItem = arrFood.map((ele) =>{
    let li = document.createElement('li')
    li.textContent = ele
    ul.appendChild(li)
})