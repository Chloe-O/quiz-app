// https://www.ef.co.uk/blog/language/questions-virtual-pub-quiz/ <<<using questions from ef.co.uk

const questionObj = [
  {
    ID: 1,
    question: "How many time zones are there in Russia?",
    answerOptions: [1, 11, 5, 10],
    correctAnswer: 11,
  },
  {
    ID: 2,
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
const quizTitle = document.getElementById("qTitle");
const questionID = document.getElementById("qID");
const quizScore = document.getElementById("qScore");
const optionBtns = document.querySelectorAll(".option-btn");

let score = 0;

quizScore.innerText = score;

function iterateQuestions() {
  questionObj.forEach((q) => {
    quizTitle.innerText = q.question;

    // e.g. select the first button and answer option at the same time, so each has the same index. We take the button at index [0] and make its innerText the item in the array at the same index [0], the loop continues until we reach the end of the optionBtn array
    optionBtns.forEach((btn, answer) => {
      btn.innerText = q.answerOptions[answer];
    });
  });
}

function startQuiz() {
  quizNavBtn.innerText = "Submit Answer";
  quizNavBtn.classList.add("disabled");
  answerBtnsContainer.style.display = "block";
  iterateQuestions();
}

quizNavBtn.addEventListener("click", startQuiz);
