const quizDB = [{
        question: "Q1: What is the full form of HTML?",
        a: " Hello To My Land",
        b: " Hey Text Markup Language",
        c: " HyperText Makeup Language",
        d: " HyperText Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of HTML?",
        a: " Hello To My Land",
        b: " Hey Text Markup Language",
        c: " HyperText Makeup Language",
        d: " HyperText Markup Language",
        ans: "ans4"
    },
    {
        question: "Q3: What is the full form of HTML?",
        a: " Hello To My Land",
        b: " Hey Text Markup Language",
        c: " HyperText Makeup Language",
        d: " HyperText Markup Language",
        ans: "ans4"
    },
    {
        question: "Q4: What is the full form of HTML?",
        a: " Hello To My Land",
        b: " Hey Text Markup Language",
        c: " HyperText Makeup Language",
        d: " HyperText Markup Language",
        ans: "ans4"
    },
    {
        question: "Q5: What is the full form of HTML?",
        a: " Hello To My Land",
        b: " Hey Text Markup Language",
        c: " HyperText Makeup Language",
        d: " HyperText Markup Language",
        ans: "ans4"
    },
    {
        question: "Q6: What is the full form of HTML?",
        a: " Hello To My Land",
        b: " Hey Text Markup Language",
        c: " HyperText Makeup Language",
        d: " HyperText Markup Language",
        ans: "ans4"
    },


]


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
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((currAnsElem) => {
        if (currAnsElem.checked) {
            answer = currAnsElem.id;
        }
    });
    return answer;
}

const disSelectAll = () => {
    answers.forEach((currAnsElem) => currAnsElem.checked = false);
}

submit.addEventListener('click', () => {
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
        `
        showScore.classList.remove("scoreArea");
    }
})