// Array of questions
const questions = [
  "Arrays in Javascript can be used to store _______.",
  "Commonly used data type in JS do not include .",
  "Inside which HTML element do we put the JavaScript?",
  "What is the correct syntax for referring to an external script called 'test.js'?",
  "How do you create a function in JavaScript?",
  "How to write an IF statement in JavaScript?",
  "How to write an IF statement for executing some code if 'i' is NOT equal to 10",
  "Which event occurs when the user clicks on an HTML element?",
  "How do you declare a JavaScript variable?",
  "Which operator is used to assign a value to a variable?"
];
// Array options
const options = [
  ["numbers and strings", "other arrays", "booleans", "all the above" ],
  ["strings", "booleans", "alerts", "numbers" ],
  ["javascript","script","js","scripting" ],
  ["script href='test.js'", "script src='test.js'", "script name='test.js'", "script location='test.js'" ],
  ["function myfunction()", "function:myfunction()", "function=myfunction()", "new function myfunction()" ],
  ["if i=5", "if i=5 then","if (i=5)", "if (i==5)" ],
  ["if (i <> 10)", "if i <> 10", "if (i != 10)", "if (i != 10) then" ],
  ["onclick", "click", "onchange", "change" ],
  ["variable empName", "v empName", "var empName", "empName"],
  ["-", "=>", "==", "="]
];

// Array of answers
const answers = [
  [ 3 ],
  [ 2 ],
  [ 1 ],
  [ 1 ],
  [ 0 ],
  [ 3 ],
  [ 2 ],
  [ 0 ],
  [ 2 ],
  [ 3 ]
];


var counter = 0;
var score = 0;
const timeoutSecs =60000;
var seconds;
var stopTimer=false;

// Get references to the #start element
var startBtn = document.querySelector('#start');
// Add event listener to start button
startBtn.addEventListener('click', statQuiz);


// Function for starting the quiz 

function statQuiz(){
  quizTimer();
  showQn();
}

// Write password to the #password input
function showQn() {
  var question = getQuestion();
  var startScrn = document.querySelector('#start-screen');

  startScrn.className="hide";

  var questionsDiv = document.querySelector('#questions');
  var questionText = document.querySelector('#question-title');
  var choicesDiv = document.querySelector('#choices');

  questionsDiv.className="start";
  questionText.innerHTML = question;

  var choiceOptions = options[counter];

  var choiceHtml="";

  for (var x=0; x<choiceOptions.length; x++) {
  var btnId = 'btn'+ x;
  choiceHtml = choiceHtml + "<button onClick='javascript:checkAns(" + x + ")' class='button' id='"+ btnId +"'>" + (x+1) + ". " + choiceOptions[x] + "</button>";

  } 
  choicesDiv.innerHTML = choiceHtml;
}

// Function for retreving 
function getQuestion(){

  return questions[counter];
}

// Function to check answers
function checkAns(buttonId)
{
  var optionId=  parseInt(buttonId, 10);;
  var answer=answers[counter];

  var feedbackDiv = document.querySelector('#feedback');
  feedbackDiv.className="feedback";
  
  if (optionId == answer) {
    score= score+1;
    feedbackDiv.innerHTML = "Correct!";
  } else {
    feedbackDiv.innerHTML = "Wrong!";
  }

  counter= counter+1;
  if (counter < questions.length )
  {
    showQn();
  } else {
    showEndScreen();
  }
}
// Function for display the end screen once the quiz is completed
function showEndScreen(){
  stopTimer = true;
  var stopTime;
  if (seconds > 0) stopTime=seconds ;
  else stopTime=0;
  document.getElementById("time").innerHTML = stopTime;
  var questionsDiv = document.querySelector('#questions');
  questionsDiv.className="hide";

  var endscrDiv = document.querySelector('#end-screen');
  endscrDiv.className="start";

  var scoreSpan = document.querySelector('#final-score');
  scoreSpan.innerHTML = score;
}


// Get references to the #start element
var submitBtn = document.querySelector('#submit');

// Add event listener to start button
submitBtn.addEventListener('click', addScore);

function addScore(){
  
  var initialsTxt=document.getElementById("initials").value;
  var myScore= initialsTxt + "-" + score;
  localStorage.setItem( "myscore",  myScore);
  window.location.href = "./highscores.html";

}

// Timer for quiz
function quizTimer()
{
  var countDownDate = new Date().getTime()+ timeoutSecs;

// Update the count down every 1 second
var x = setInterval(function() {
  if (stopTimer) return;
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  seconds = Math.floor(distance / 1000);

  //console.log(seconds);

  document.getElementById("time").innerHTML = seconds; // + "s ";

  
  //console.log(distance);
  if (distance <= 0) {  
    //clearInterval(x);
    document.getElementById("time").innerHTML = '0';
    showEndScreen();
    return;
  }
}, 1000);
}