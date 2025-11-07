// Project 03: Time Show each every second on UI
let clock = document.querySelector("#timeBox")
setInterval(() => {
    let date = new Date()
    clock.textContent = date.toLocaleTimeString()
}, 1000);