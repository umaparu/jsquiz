// Array of questions
var questions = [
  "Arrays in Javascript can be used to store _______.",
  "Commonly used data type in JS do not include ."
];

var options = [
  ["numbers and strings", "other arrays", "booleans", "all the above" ],
  ["strings", "booleans", "alerts", "numbers"]
];


var answers = [
  [ 3 ],
  [ 2 ]
];

var counter = 0;
var score = 0;

// Get references to the #start element
var startBtn = document.querySelector('#start');

// Add event listener to start button
startBtn.addEventListener('click', showQn);



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

function getQuestion(){

  return questions[counter];
}


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


function showEndScreen(){
  var questionsDiv = document.querySelector('#questions');
  questionsDiv.className="hide";

  var endscrDiv = document.querySelector('#end-screen');
  endscrDiv.className="start";

  var scoreSpan = document.querySelector('#final-score');
  scoreSpan.innerHTML = score;
}


// Get references to the #start element
var submitBtn = document.querySelector('#submit');
var highScore

// Add event listener to start button
submitBtn.addEventListener('click', addScore);