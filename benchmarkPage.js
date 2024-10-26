const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
localStorage.setItem("questions", JSON.stringify(questions));
console.log(questions);
const spinner = document.getElementsByClassName("spinner")[0];
const questionName = document.getElementsByClassName("question-title")[0];
const questionContainer = document.getElementsByClassName("question-container")[0];
const answerSec = document.getElementsByClassName("answers-section")[0];
const answer = document.getElementsByClassName("answer");
console.log(answer);
const questionNum = document.getElementsByClassName("question-number")[0];
const dinamicNum = document.getElementsByClassName("dinamic-num")[0];
const staticNum = document.getElementsByClassName("static-number")[0];
let counter = 0;

const answers = answerSec.parentElement.children;
console.log(answers);

const arrayOfAnswers = [];
const selectedAnswers = [];

const totalTime = 30; // Totale secondi del timer
let timeRemaining = totalTime; // Tempo rimanente
const timeDisplay = document.getElementById("time-remaining");
const circle = document.querySelector(".timer-progress");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}
questionName.innerHTML = questions[counter].question;
let interval;

function startTimer() {
  interval = setInterval(() => {
    timeRemaining--;
    timeDisplay.textContent = timeRemaining;

    const percentage = (timeRemaining / totalTime) * 100;
    setProgress(percentage);

    if (timeRemaining <= 0) {
      clearInterval(interval);
      timeRemaining = 30;
      startTimer();
      selectedAnswers.push("Not Answered");
      if (counter < 9) {
        counter++;
        dinamicNum.innerHTML = counter + 1;
        generateQuestion(counter);
      } else {
        counter = 11;
        clearInterval(interval);
        timeRemaining = 30;
        localStorage.setItem("selecteds", JSON.stringify(selectedAnswers));

        location.assign("resultsPage.html");
      }
    }
  }, 1000); // Aggiorna ogni secondo
  console.log(selectedAnswers);
}

startTimer();

arrayOfAnswers.push(questions[0].correct_answer);
arrayOfAnswers.push(questions[0].incorrect_answers);
let newArray = arrayOfAnswers.flat();
console.log(newArray);

const shuffleArray = () => {
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Scambio di elementi
  }
};
shuffleArray();
console.log(newArray);

for (let i = 0; i < newArray.length; i++) {
  answer[i].innerHTML = newArray[i];
}

for (let i = 0; i < answer.length; i++) {
  answer[i].addEventListener("click", (e) => {
    const selectedAnswer = e.target.innerHTML;
    selectedAnswers.push(selectedAnswer);
    console.log(selectedAnswers);
    clearInterval(interval);
    timeRemaining = 30;
    if (counter < 9) {
      counter++;
      dinamicNum.innerHTML = counter;
    }
    generateQuestion(counter);
    startTimer();
  });
}

function generateQuestion(counter) {
  answerSec.innerHTML = "";

  while (newArray.length > 0) {
    newArray.pop();
  }
  newArray.push(questions[counter].correct_answer);
  newArray.push(questions[counter].incorrect_answers);
  newArray = newArray.flat();
  shuffleArray();
  console.log(newArray);

  questionName.innerHTML = questions[counter].question;
  for (let j = 0; j < newArray.length; j++) {
    const ans = document.createElement("div");
    ans.classList.add("answer");
    ans.innerHTML = newArray[j];
    answerSec.appendChild(ans);
  }

  const newAnswerElements = document.getElementsByClassName("answer");

  for (let i = 0; i < newAnswerElements.length; i++) {
    newAnswerElements[i].addEventListener("click", (e) => {
      const selectedAnswer = e.target.innerHTML;
      selectedAnswers.push(selectedAnswer);
      console.log(selectedAnswers);

      clearInterval(interval);
      timeRemaining = 30;

      if (counter < 9) {
        counter++;
        dinamicNum.innerHTML = counter;
        console.log(counter);
        generateQuestion(counter);
        startTimer();
      } else {
        localStorage.setItem("selecteds", JSON.stringify(selectedAnswers));
        location.assign("resultsPage.html");
      }
    });
  }
}
