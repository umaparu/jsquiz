// Array of questions

var questions = [
  [1, "Arrays in Javascript can be used to store _______."],
  [2, "Commonly used data type in JS do not include ."]
];

var options = [
  [1, ["1", "numbers and strings"], ["2","other arrays"], ["3","booleans"], ["4","all the above" ]],
  [2, ["1","strings"], ["2","booleans"], ["3","alerts"], ["4","numbers"]]
];

var answers = [
  [1, 4 ],
  [2, 3]
];

var counter = 0;
var score = 0;

// Get references to the #start element
var startBtn = document.querySelector('#start');

// Add event listener to start button
startBtn.addEventListener('click', showQn);



// Write password to the #password input
function showQn() {
  var questionObj = getQuestion();
  var question = questionObj[1];
  var startScrn = document.querySelector('#start-screen');
  startScrn.className="hide";

  var questionsDiv = document.querySelector('#questions');
  var questionText = document.querySelector('#question-title');
  var choicesDiv = document.querySelector('#choices');

  questionsDiv.className="start";
  questionText.innerHTML = question;

  var choiceOptions = options[counter];

  //var choiceHtml="<ul>";

  var choiceHtml="";

  for (var x=1; x<choiceOptions.length; x++) {
  var optionItem = choiceOptions[x];
  var btnId = 'btn'+ optionItem[0];
  choiceHtml = choiceHtml + "<button onClick='javascript:checkAns(" + optionItem[0] + ")' class='button' id='"+ btnId +"'>" + optionItem[0] + ". " + optionItem[1] + "</button>";

  } 
  //choiceHtml= choiceHtml+"</ul>";
  //choicesDiv.innerHTML = "<button class='button' id='"+ btnId +"'>" + optionItem[0] + ". " + optionItem[1] + "</button></li></ol>";
  choicesDiv.innerHTML = choiceHtml;
}

function getQuestion(){

  return questions[counter];
}


function checkAns(buttonId)
{
  var qnId = counter;
  var optionId= buttonId;
  
  var answerArr=answers[counter];
}

