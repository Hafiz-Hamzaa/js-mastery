// Project 04: Guess the Number Game

const inp = document.querySelector("#guess");
const result = document.querySelector("#resultBox");
const guessBtn = document.querySelector(".btn");
const resetBtn = document.querySelector("#resetBtn");
const attemptCount = document.querySelector("#attemptCount");

const secretCode = 88;
let attempts = 0;

guessBtn.addEventListener("click", () => {
  const guess = inp.value.trim();

  if (!guess) {
    alert("Please enter a number!");
    return;
  }

  attempts++;
  attemptCount.textContent = attempts;

  if (+guess === secretCode) {
    result.textContent = "🎉 Congratulations! You guessed it right!";
  } else {
    result.textContent = "❌ Wrong guess! Try again.";
  }
});

resetBtn.addEventListener("click", () => {
  inp.value = "";
  result.textContent = "";
  attemptCount.textContent = "";
  attempts = 0;
});
