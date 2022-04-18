const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {}
let acceptingAnswers = true;
let score = 0;
let questionCouter = 0;
let avaliableQuestions = [];

let questions = [
    {
        "question": "Dentro de qual elemento HTML colocamos o JavaScript??",
        "choice1": "<script>",
        "choice2": "<javascript>",
        "choice3": "<js>",
        "choice4": "<scripting>",
        "answer": 1
      },
      {
        "question": "Qual é a sintaxe correta para se referir a um script externo chamado 'xxx.js'?",
        "choice1": "<script href='xxx.js'>",
        "choice2": "<script name='xxx.js'>",
        "choice3": "<script src='xxx.js'>",
        "choice4": "<script file='xxx.js'>",
        "answer": 3
      },
      {
        "question": " Como você escreve 'Hello World' em uma caixa de alerta?",
        "choice1": "msgBox('Hello World');",
        "choice2": "alertBox('Hello World');",
        "choice3": "msg('Hello World');",
        "choice4": "alert('Hello World');",
        "answer": 4
      }
]

// CONSTANTS

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () =>{
    questionCounter = 0;
    score = 0;
    avaliableQuestions = [...questions];
    console.log(avaliableQuestions)
    getNewQuestion();
}

getNewQuestion = () => {
    questionCouter++;
    const questionIndex = Math.floor(Math.random() * avaliableQuestions.length);
    currentQuestion = avaliableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion["choice" + number]
    })
}

startGame()