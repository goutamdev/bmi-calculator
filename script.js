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

  // Basic input validation
  if (isNaN(weight) || isNaN(heightM) || weight <= 0 || heightM <= 0) {
    bmiValue.textContent = "Invalid input.";
    bmiAdvice.textContent = "Please enter valid positive numbers for weight and height.";
    modal.style.display = "block";
    return;
  }

  const bmi = weight / (heightM * heightM);
  const bmiRounded = bmi.toFixed(2);

  // Check for unrealistic BMI range
  if (bmi < 10 || bmi > 60) {
    bmiValue.textContent = `Error: Unrealistic BMI (${bmiRounded})`;
    bmiAdvice.textContent = "Please double-check your inputs. Such values may be incorrect.";
    modal.style.display = "block";
    return;
  }

  bmiValue.textContent = `Your BMI is ${bmiRounded}`;

  let advice = "";
  if (bmi < 18.5) {
    advice = "You're underweight. You may need to increase your calorie intake with nutritious food. Include healthy fats, proteins, and carbs. Consider consulting a dietitian or doctor for a personalized plan.";
  } else if (bmi < 24.9) {
    advice = "You have a healthy weight. Keep up the good work! Maintain a balanced diet, stay hydrated, and engage in regular physical activity like walking, cycling, or light workouts.";
  } else if (bmi < 29.9) {
    advice = "You're overweight. It's a good time to evaluate your eating habits and physical activity. Focus on portion control, reduce processed food, and add moderate exercise (30 minutes/day) to your routine.";
  } else {
    advice = "You're in the obese range. This may increase the risk of chronic conditions like heart disease or diabetes. It's highly recommended to seek guidance from a healthcare provider or nutritionist and begin a structured plan involving diet and regular exercise.";
  }

  bmiAdvice.textContent = advice;
  modal.style.display = "block";
});

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
