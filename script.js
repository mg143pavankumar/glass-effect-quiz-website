const quizDB = [
  {
    question:
      "Q1: Which of the following is the correct syntax to print the message in C++ language?",
    a: ' cout <<"Hello world!";',
    b: " Cout << Hello world! ;",
    c: 'Out <<"Hello world!;',
    d: " None of the above",
    ans: "ans1",
  },
  {
    question: "Q2: Which of the following is the correct identifier?",
    a: " $var_name",
    b: " VAR_123",
    c: " varname@",
    d: " None of the above",
    ans: "ans2",
  },
  {
    question: "Q3: Which of the following is the address operator?",
    a: " @",
    b: " #",
    c: " &",
    d: " %",
    ans: "ans3",
  },
  {
    question:
      "Q4: Which of the following features must be supported by any programming language to become a pure object-oriented programming language?",
    a: " Encapsulation",
    b: " Inheritance",
    c: " Polymorphism",
    d: " All of the above",
    ans: "ans4",
  },
  {
    question:
      "Q5: The programming language that has the ability to create new data types is called___.",
    a: " Overloaded",
    b: " Encapsulated",
    c: " Reprehensible",
    d: " Extensible",
    ans: "ans4",
  },
  {
    question:
      "Q6:Which of the following is the original creator of the C++ language?",
    a: " Dennis Ritchie",
    b: " Ken Thompson",
    c: " Bjarne Stroustrup",
    d: " Brian Kernighan",
    ans: "ans3",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const showScore = document.querySelector("#showScore");

const answers = document.querySelectorAll(".answer");

let questionCount = 0;
let score = 0;

//getting data when ever page get loaded
const loadQuestion = () => {
  // console.log(quizDB[0].question);
  const questionList = quizDB[questionCount];
  question.innerHTML = questionList.question;

  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((currAnsElem) => {
    if (currAnsElem.checked) {
      answer = currAnsElem.id;
    }
  });
  return answer;
};

const disSelectAll = () => {
  answers.forEach((currAnsElem) => (currAnsElem.checked = false));
};

submit.addEventListener("click", () => {
  const checkAnswer = getCheckAnswer();
  // console.log(checkAnswer);

  if (checkAnswer === quizDB[questionCount].ans) {
    score++;
  }

  //updating questions when user submit
  questionCount++;
  disSelectAll();
  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
            <h3>Your scored: ${score}/${quizDB.length} ✌</h3>
            <button class = "btn" onclick ="location.reload()">REST AGAIN</button>
        `;
    showScore.classList.remove("scoreArea");
  }
});
