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
const answerContainer = document.getElementById("qOptions");
const quizTitle = document.getElementById("qTitle");
const questionID = document.getElementById("qID");
const quizScore = document.getElementById("qScore");

let score = 100;

quizScore.innerText = score;

function iterateQuestions() {
  questionObj.forEach((q) => {
    quizTitle.innerText = q.question;



    console.log(q.ID);
    console.log(q.question);

    q.answerOptions.forEach((qo) => {
      let eachQoption = document.createElement("button");
      eachQoption.innerText = qo;
      qOptions.innerText = eachQoption;
      console.log(eachQoption);
    });

    console.log(q.correctAnswer);
  });
}

iterateQuestions();
