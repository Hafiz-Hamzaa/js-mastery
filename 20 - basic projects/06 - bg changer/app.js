// Project : Background Changer
let btn = document.querySelector("#changeBtn")
let body = document.querySelector("body")
let code = document.querySelector("#colorCode")

let colors = [
  "#BFDBFE", // blue-200
  "#C7D2FE", // indigo-200
  "#A5F3FC", // cyan-200
  "#FBCFE8", // pink-200
  "#BBF7D0", // green-200
  "#FEF9C3", // yellow-100
  "#E9D5FF", // purple-200
  "#FED7AA",
  "#FCE1E4", // soft pink
  "#E8F0FE", // light blue
  "#DFFFD6", // mint green
  "#FFF5CC", // soft yellow
  "#EDE7F6", // lavender
  "#E0F7FA", // pale cyan
  "#F3E5F5", // lilac
  "#FFF0F5", // lavender blush
  "#E8F5E9", // pale green
  "#FFF8E1", // light cream
];
btn.addEventListener("click",()=>{
    const randomIndex = Math.floor(Math.random() * colors.length)
    const newColor = colors[randomIndex]
    body.style.backgroundColor = newColor
    code.textContent = newColor
})