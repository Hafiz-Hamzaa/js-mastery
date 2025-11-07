// Lecture 20 -- Making Basic Projects
// Project 01- Color Changer

let redBox = document.querySelector("#redBox")
let green = document.querySelector("#greenBox")
let purple = document.querySelector("#purpleBox")
let blue = document.querySelector("#blueBox")

redBox.addEventListener('click',()=>{
    document.body.style.backgroundColor = '#ff595e'
})

greenBox.addEventListener('click',()=>{
    document.body.style.backgroundColor = '#8ac926'
})

purpleBox.addEventListener('click',()=>{
    document.body.style.backgroundColor = '#6a4c93'
})

blueBox.addEventListener('click',()=>{
    document.body.style.backgroundColor = '#1982c4'
})