const quizQuestion = [

    {
        question: "What is 1 + 1?",
        a: '9',
        b: '10',
        c: '2',
        d: '200',
        correct_answer: 'c',
    },

    {
        question: "Which is nost famous programming language in 2021?",
        a: 'Python',
        b: 'HTML',
        c: 'JavaScript',
        d: 'C++',
        correct_answer: 'a',
    },

    {
        question: 'Who created JavaScript?',
        a: 'Buzz Lightyear',
        b: 'Mark Zuckerberg',
        c: 'Brendan Eich',
        d: 'The person answering this question.',
        correct_answer: 'c'
    },

    {
        question: 'What is heavier; a pound of feathers, or a pound of coins?',
        a: 'A pound of feathers.',
        b: 'Both are equally heavy',
        c: 'A pound of coins',
        d: 'what?',
        correct_answer: 'c'
    },

    {
        question: 'What is the third planet of the solar system?',
        a: 'Jupiter',
        b: 'Neptune',
        c: 'Mars',
        d: 'Earth',
        correct_answer: 'd'
    },

    {
        question: 'What is 2+5?',
        a: '10',
        b: '15',
        c: '8',
        d: 'None of the above',
        correct_answer: 'd',
    },

    {
        question: `"1" === 1?`,
        a: 'True',
        b: 'False',
        correct_answer: 'b'
    },

    {
        question: 'Is the United States located in North America?',
        a: 'True',
        b: 'False',
        correct_answer: 'a'
    },
    
    {
        question: 'Mickey Mouse’s name was originally meant to be Mortimer Mouse.',
        a: 'True',
        b: 'False',
        correct_answer: 'a'
    },

    {
        question: 'The pacific island Nauru is the smallest country in the world.   ',
        a: 'True',
        b: 'False',
        correct_answer: 'b'
    },

];



const submit = document.getElementById('submit');
const question = document.getElementById('question');
const option_a = document.getElementById('option_a');
const option_b = document.getElementById('option_b');
const option_c = document.getElementById('option_c');
const option_d = document.getElementById('option_d');
const question_container = document.getElementById('question-container');



let currentQuestion = 0;
let correct = 0;
let incorrect = 0;

getQuestion();  


function getQuestion() {
    deSelect();
    const currentQuestionObj = quizQuestion[currentQuestion];
    question.innerHTML = currentQuestionObj.question;
    option_a.innerHTML = currentQuestionObj.a;
    option_b.innerHTML = currentQuestionObj.b;
    option_c.innerHTML = currentQuestionObj.c;
    option_d.innerHTML = currentQuestionObj.d;
    
}

function deSelect() {

    const answerRadio = document.querySelectorAll('.answers');

    answerRadio.forEach((answer) => {
        answer.checked = false;
    })

}

function getSelected() {

    const answerRadio = document.querySelectorAll('.answers');
    let answer = undefined;
    answerRadio.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id
            
        }
    });
    return answer;
}

function checkAnswer() {

}


submit.addEventListener('click', () =>{

    const answer = getSelected();

    if(answer){
        if(answer == quizQuestion[currentQuestion].correct_answer) {
            correct++;
        }

        currentQuestion++;
        if(currentQuestion < quizQuestion.length){ 
            getQuestion();
        }else {
            question_container.innerHTML = `<h2>Score: ${correct} / ${quizQuestion.length}</h2> <button class="btns" type="button" onclick=location.reload() nn>Restart Quiz!</button>`;
            
            submit.style.display = 'none';
        }
    }
    
})