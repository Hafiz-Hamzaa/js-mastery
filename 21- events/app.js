// Lecture 21 : Events in JS
// Event Handler jo kai aik function hande krta hai 
// Event listner jokai even ko sunta hai fnc execute hota just exmaple

// let h1 = document.querySelector("h1")
// h1.addEventListener('click',()=>{
//     alert("Clicked")
// })

// Event Object: Automatically pass hota hai callback me ((event) {...}) Isme target, currentTarget, type, preventDefault() jaise properties hote hain.

// h1.addEventListener('click',(e)=>{
//     console.log(e);
//     h1.innerText = "Event Learning in JS"
// })

// // Event Bubbling : bottom to top mtlb child to parent jata or ye bydefault false hota pehle capturing chlta hai first mode me lkn wo false hot hai isliye wo second pahse me chla jata hai agr hm usk true krle to wo pehel chale ga 

// document.querySelector("ul").addEventListener("click",()=>{
//     console.log('ul clicked');
// },true)
// document.querySelector("#li-one").addEventListener("click",()=>{
//     console.log('li one clicked');
// })
// document.querySelector("#li-two").addEventListener("click",()=>{
//     console.log('li two clicked');
// })

// noted pehle li clicked hoga qkai child to parent chlta hai neeche se uper or agr ham ul ko trye krde ab ye capture mode ajai ga or pehe ye chale ga 

// event propgation : mtlb agr hame rokna hai kai wo agai prpogate na kre wahi ruk jai 

// Practice Example 
document.querySelector("#parent").addEventListener("click",(e)=>{
    console.log("Parent clicked");
    console.log(e.type);
    
},true)
document.querySelector("#child").addEventListener("click",(e)=>{
    console.log("Child clicked");
    console.log(e.type);
    e.stopPropagation()
    
})