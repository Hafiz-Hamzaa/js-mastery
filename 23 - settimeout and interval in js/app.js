// Lecture 23 : stetime out and interval

// 🕒 setTimeout() : setTimeout() ek function ko sirf ek baar run karta hai — given time (ms) ke baad.
// 🔁 setInterval() : setInterval() ek function ko bar-bar repeatedly run karta hai — har given interval (ms) ke baad.
// 🧹 clearTimeout() : clearTimeout() kisi setTimeout() ko cancel kar deta hai agar wo abhi tak run nahi hua.
// 🧹 clearInterval() : clearInterval() kisi setInterval() ko band kar deta hai jisse repeat chalna ruk jaata hai.

const h1 = document.querySelector("h1");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const reset = document.querySelector("#reset")

let count = 1;
let intervalId = null;

startBtn.addEventListener("click", () => {
  clearInterval(intervalId); // pehle se chal raha hai to stop karo

  intervalId = setInterval(() => {
    h1.textContent = count++;
  }, 1000);

});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
});
