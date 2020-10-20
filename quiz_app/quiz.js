const quizQuestions = [
  {
    question: "2 + 2 = ?",
    options: ["4", "5", "3", "2", "1"],
    answer: 0,
  },
  {
    question: "1 + 2 = ?",
    options: ["6", "8", "12", "22", "3"],
    answer: 4,
  },

  {
    question: "3 + 2 = ?",
    options: ["43", "51", "32", "21", "5"],
    answer: 4,
  },
  {
    question: "2 + 0 = ?",
    options: ["2", "56", "36", "23", "19"],
    answer: 0,
  },

  {
    question: "2 - 1 = ?",
    options: ["13", "1", "31", "8", "0"],
    answer: 1,
  },
];

let quiz = [];
let currentQuestion = 1;
let answersArray = [];

const questionNumber = document.querySelector("#questionNumber");
const questionText = document.querySelector(".question");
const answerArea = document.querySelector(".answer");

const setQuestion = () => {
  // Question
  for (const question of quizQuestions) {
    quiz.push(question);
  }
  console.log(quiz);
};

// Get question and answer for specific question
const getQuestion = () => {
  // Question Number
  questionNumber.innerHTML =
    "Question " + currentQuestion + " of " + quizQuestions.length;

  const currQuestion = quiz[Math.floor(Math.random() * quiz.length)];
  questionText.innerHTML = currQuestion.question;

  // Answers
  for (const answer of currQuestion.options) {
    answersArray.push(answer);
  }

  for (let i = 0; i < currQuestion.options.length; i++) {
    setAnswers(i, currQuestion.options[i]);
  }
  const index = quiz.indexOf(currQuestion);
  quiz.splice(index, 1);

  confirmAnswers(currQuestion);
};

const setAnswers = (id, answer) => {
  const answerOptions = document.createElement("button");
  answerOptions.innerHTML = answer;
  answerOptions.className = "answer-btn";
  answerOptions.id = "id" + id;
  answerArea.appendChild(answerOptions);
};

const nextQuestion = () => {
  if (currentQuestion === quizQuestions.length) {
    quizOver();
  }
  currentQuestion = currentQuestion + 1;

  // Remove AnswerArea Child
  for (let i = 0; i < answersArray.length; i++) {
    const answerOption = document.querySelector(`#id${i}`);
    answerArea.removeChild(answerOption);
  }
  answersArray = [];
  getQuestion();
};

function confirmAnswers(question) {
  let userClicked = 0;
  const answersButtons = document.querySelectorAll(".answer-btn");
  const trueAnswer = question.options[question.answer];

  for (let i = 0; i < answersButtons.length; i++) {
    answersButtons[i].addEventListener("click", () => {
      if (userClicked === 0) {
        if (answersButtons[i].innerHTML === trueAnswer) {
          answersButtons[i].classList.add("is-selected-true");
        } else {
          answersButtons[i].classList.add("is-selected-wrong");
          getTrueAnswer(question);
        }
        userClicked++;
      }
    });
  }
}

function getTrueAnswer(question) {
  const answersButtons = document.querySelectorAll(".answer-btn");
  const trueAnswer = question.options[question.answer];
  for (let i = 0; i < answersButtons.length; i++) {
    if (answersButtons[i].innerHTML === trueAnswer) {
      answersButtons[i].classList.add("is-selected-true");
    }
  }
}

const quizOver = () => {
  console.log("Quiz is over");
};

window.onload = function () {
  setQuestion();
  getQuestion();
};
