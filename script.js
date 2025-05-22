const form = document.getElementById("bmiForm");
const modal = document.getElementById("bmiModal");
const closeBtn = document.querySelector(".close");
const bmiValue = document.getElementById("bmiValue");
const bmiAdvice = document.getElementById("bmiAdvice");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const heightCm = parseFloat(document.getElementById("height").value);
  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  const bmiRounded = bmi.toFixed(2);

  bmiValue.textContent = `Your BMI is ${bmiRounded}`;

  let advice = "";
  if (bmi < 18.5) {
    advice = "You are underweight. Try to eat a balanced diet.";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    advice = "You are in a healthy weight range. Keep it up!";
  } else if (bmi >= 25 && bmi < 29.9) {
    advice = "You are overweight. Consider regular exercise.";
  } else {
    advice = "You are in the obese range. Consult a healthcare provider.";
  }

  bmiAdvice.textContent = advice;
  modal.style.display = "block";
});

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
