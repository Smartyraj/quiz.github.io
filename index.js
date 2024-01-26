var quizdata =[
    {
        question : "Which framework is related to JS?",
        a : ".net",
        b : "flask",
        c : "django",
        d : "Angular",
        correct : "d"
    },
    {
        question : "Which of the following keywords is used to define a variable in Javascript?",
        a : "var",
        b : "let",
        c : "Both a and b",
        d : "None of the above",
        correct : "c"
    },
    {
        question : "Which type of JavaScript language is ___?",
        a : "Object-Oriented",
        b : "Object-Based",
        c : "Assembly-language",
        d : "High-level",
        correct : "a"
    },
    {
        question : "Which is not a framework?",
        a : "C++",
        b : "angular",
        c : "django",
        d : "Express",
        correct : "a"
    },
    {
        question : "Inside which HTML element do we put the JavaScript?",
        a : "script",
        b : "scripting",
        c : "js",
        d : "javascript",
        correct : "a"
    }
]

var quiz = document.getElementById('quiz');
var answer = document.querySelectorAll('.ans');
var question = document.getElementById('question');
var option_a = document.getElementById('a_value');
var option_b = document.getElementById('b_value');
var option_c = document.getElementById('c_value');
var option_d = document.getElementById('d_value');

var submitbtn = document.getElementById('submit');

var currentQuestion = 0;
var quizScore = 0;
loadQuiz();

function loadQuiz(){
    deselect();
    question.innerHTML = quizdata[currentQuestion].question;
    option_a.innerHTML = quizdata[currentQuestion].a;
    option_b.innerHTML = quizdata[currentQuestion].b;
    option_c.innerHTML = quizdata[currentQuestion].c;
    option_d.innerHTML = quizdata[currentQuestion].d;
}

function deselect(){
    answer.forEach(answer => answer.checked = false)
}

submitbtn.addEventListener('click', ()=>{
    var selectedoption;
    answer.forEach(answer=>{
        if(answer.checked){
            selectedoption = answer.id;
        }
    })
    if(selectedoption == quizdata[currentQuestion].correct){
        quizScore += 1;
    }
    currentQuestion = currentQuestion + 1;
    if(currentQuestion == quizdata.length){
        document.getElementById("quizdiv").innerHTML = `<h1 class="text-success">You have answered ${quizScore} correctly out of ${quizdata.length} 🎉</h1>`;
    }
    else{
        loadQuiz();
    }
});