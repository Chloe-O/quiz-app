// https://www.ef.co.uk/blog/language/questions-virtual-pub-quiz/ <<<using questions from ef.co.uk

const questionObj = [
  {
    question: "How many time zones are there in Russia?",
    answerOptions: [1, 11, 5, 10],
    correctAnswer: 11,
  },
  {
    question: "What's the national flower of Japan?",
    answerOptions: ["Hibiscus", "Lotus flower", "Rose", "Cherry Blossom"],
    correctAnswer: "Cherry Blossom",
  },
  //   {
  //     ID: 3,
  //     question: "How many time zones are there in Russia?",
  //     answerOptions: [1, 11, 5, 10],
  //     correctAnswer: 11,
  //   },
  //   {
  //     ID: 4,
  //     question: "How many time zones are there in Russia?",
  //     answerOptions: [1, 11, 5, 10],
  //     correctAnswer: 11,
  //   },
  //   {
  //     ID: 5,
  //     question: "How many time zones are there in Russia?",
  //     answerOptions: [1, 11, 5, 10],
  //     correctAnswer: 11,
  //   },
  //   {
  //     ID: 6,
  //     question: "How many time zones are there in Russia?",
  //     answerOptions: [1, 11, 5, 10],
  //     correctAnswer: 11,
  //   },
  //   {
  //     ID: 7,
  //     question: "How many time zones are there in Russia?",
  //     answerOptions: [1, 11, 5, 10],
  //     correctAnswer: 11,
  //   },
  //   {
  //     ID: 8,
  //     question: "How many time zones are there in Russia?",
  //     answerOptions: [1, 11, 5, 10],
  //     correctAnswer: 11,
  //   },
];

const quizNavBtn = document.getElementById("qNavigationBtn");
const answerBtnsContainer = document.getElementById("qOptions");
const quizMessage = document.getElementById("quizMessage");
const quizTitle = document.getElementById("qTitle");
const quizScore = document.getElementById("qScore");
const optionBtns = document.querySelectorAll(".option-btn");

let score = 0;
let questionIndex = 0;

quizScore.innerText = score;

function updateScore() {
  score++;
  questionIndex++;
  quizScore.innerText = score;
}

function selectAnswer(correct) {
  optionBtns.forEach((ans) => {
    ans.addEventListener("click", (e) => {
      if (e.target.innerText == correct) {
        console.log(e.target.innerText);
        console.log(correct);
        correctAnswerClicked(e);
        updateScore();
        resetQuestion(e);
        iterateQuestions();
      } else {
        quizMessage.style.color = "red";
        quizMessage.innerText = "Not quite! Try again";
        // e.target.style.background = "red";
      }
    });
  });
}

function correctAnswerClicked(e) {
  quizMessage.style.color = "green";
  quizMessage.innerText = "That's right!";
  e.target.style.background = "green";
  answerBtnsContainer.style.opacity = "0.5";
  answerBtnsContainer.style.pointerEvents = "none";
  //   questionIndex++;
}

// How to 'reset' question??
function resetQuestion(e) {
  quizMessage.style.color = "black";
  quizMessage.innerText = "";
  e.target.style.background = "#f0f0f0";
  answerBtnsContainer.style.opacity = "1";
  answerBtnsContainer.style.pointerEvents = "visible";
}

function iterateQuestions() {
  quizTitle.innerText = questionObj[questionIndex].question;
  let ansOptions = questionObj[questionIndex].answerOptions;
  let correct = questionObj[questionIndex].correctAnswer;
  optionBtns.forEach((x, index) => {
    x.innerText = ansOptions[index];
  });
  selectAnswer(correct);
}

function startQuiz() {
  quizNavBtn.innerText = "Submit Answer";
  quizNavBtn.classList.add("disabled");
  answerBtnsContainer.style.display = "block";
  iterateQuestions();
}

quizNavBtn.addEventListener("click", startQuiz);
