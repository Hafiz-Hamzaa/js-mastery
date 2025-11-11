// Project : Counter Application
const incBtn = document.querySelector("#incBtn");
const decBtn = document.querySelector("#decBtn");
const resBtn = document.querySelector("#resBtn");
const counter = document.querySelector("#display");

let count = 0;

// Update the counter display
function updateDisplay() {
  counter.textContent = count;
}

// Increment
incBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

// Decrement
decBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateDisplay();
  } else {
    alert("Count can't go below 0!");
  }
});

// Reset
resBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

// Initialize display
updateDisplay();
