let selectedAnswer = JSON.parse(localStorage.getItem("selecteds"));
let allQuestions = JSON.parse(localStorage.getItem("questions"));
const correctSpan = document.querySelector(".correct div + div + div span");
const wrongSpan = document.querySelector(".wrong div + div + div span");
const correctPercentage = document.getElementsByClassName("correct-percent")[0];
const wrongPercentage = document.getElementsByClassName("wrong-percent")[0];
const rate = document.getElementsByClassName("rate")[0];
const congrats = document.getElementsByClassName("congrats")[0];
const desc = document.getElementsByClassName("desc")[0];
const percent = document.getElementsByClassName("percent")[0];
const circle = document.getElementsByClassName("circle")[0];

let correctCounter = 0;
let wrongCounter = 0;

console.log(selectedAnswer);
console.log(allQuestions);

rate.addEventListener("click", (e) => {
  location.assign("feedbackPage.html");
});

for (let j = 0; j < selectedAnswer.length; j++) {
  if (selectedAnswer[j] === allQuestions[j].correct_answer) {
    correctCounter++;
  } else wrongCounter++;
}

if (correctCounter === 0) {
  circle.style = `background: #ff2f92`;
} else if (correctCounter === 10) {
  circle.style = `background: #00f7ff`;
} else {
  circle.style = `background: conic-gradient(#00f7ff ${
    (correctCounter / 10) * 100
  }%, #ff2f92 ${(wrongCounter / 10) * 100}%)`;
}

console.log(correctCounter);
console.log(wrongCounter);

correctPercentage.innerHTML = `${(correctCounter / 10) * 100} %`;
wrongPercentage.innerHTML = `${(wrongCounter / 10) * 100} %`;
if (correctCounter > 5) {
  congrats.innerHTML = "Congratulations!";
  desc.innerHTML = "You passed the exam";
} else {
  congrats.innerHTML = "Sorry!";
  desc.innerHTML = "You haven't passed the exam";
}

percent.innerHTML = `${(correctCounter / 10) * 100} %`;
correctSpan.innerHTML = correctCounter;
wrongSpan.innerHTML = wrongCounter;

localStorage.removeItem("selecteds");
