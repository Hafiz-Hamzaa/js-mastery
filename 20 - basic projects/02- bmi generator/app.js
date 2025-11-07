// Project 02 - BMI Generator
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");
let rangeRes = document.querySelector(".rangeRes")

let BMI;

btn.addEventListener("click", () => {
  let heightValue = height.value / 100;
  let weightValue = weight.value;
  if (heightValue == "" || weightValue == "") {
    alert('Kindly giive a value something');
    return;
  } else if (heightValue < 0 || isNaN(heightValue)) {
    result.textContent = 'Please give a valid height';
  } else if (weightValue < 0 || isNaN(weightValue)) {
    result.textContent = 'Please give a valid weight';
  } else {
    BMI = (weightValue / (heightValue * heightValue)).toFixed(2);
    result.textContent = `Your BMI is : ${BMI}`;
    result.style.color = 'white'
  }

  if(BMI < 18.6){
    rangeRes.innerHTML =  `<span>Your <b>BMI</b> is under weight</span>`
  }else if(BMI > 18.8 && BMI <= 24.6){
    rangeRes.innerHTML =  `<span>Your <b>BMI</b> is normal weight</span>`
  }else{
    rangeRes.innerHTML = `<span>Your <b>BMI</b> is over weight</span>`
  }
});