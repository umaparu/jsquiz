
  var highscoresList = document.querySelector('#highscores');

  var clearBtn = document.querySelector('#clear');
  // Add event listener to start button
  clearBtn.addEventListener('click', clearScore);

showScores();

function showScores() {

  highscoresList.className="button";

  var highScore = localStorage.getItem("highscore");
  var myScore = localStorage.getItem("myscore");

  //alert(highScore);
  var listText = "<ol>";
  var mArr;
  var mScore;
  var hArr;
  var hScore;
  
  if (myScore != null) {
     mArr = myScore.split('-');
     mScore= parseInt(mArr[1]);
  }

  if (highScore != null )
  {
     hArr = highScore.split('-')
     hScore= parseInt(hArr[1]);

  }

  if ((highScore != null)  &&  (myScore != null))
  {
    if (mScore > hScore) {
      listText = listText + "<li>" + mArr[0] + " - " + mArr[1] + "</li>";
      listText = listText + "<li>" + hArr[0] + " - " + hArr[1] + "</li>";
    
      localStorage.setItem("highscore", myScore);
    } else {
      
      listText = listText + "<li>" + hArr[0] + " - " + hArr[1] + "</li>"; 
      listText = listText + "<li>" + mArr[0] + " - " + mArr[1] + "</li>";
    }
  } else 
  {
     if (myScore != null) {
      listText = listText + "<li>" + mArr[0] + " - " + mArr[1] + "</li>";
      localStorage.setItem("highscore", myScore);
     }
     if (highScore != null )
     {
        listText = listText + "<li>" + hArr[0] + " - " + hArr[1] + "</li>"; 
     }

  }

  localStorage.removeItem("myscore");

  listText = listText + "</ol>"
  highscoresList.innerHTML = listText;
}

function clearScore(){
  highscoresList.innerHTML = "<ol></ol>";
  localStorage.removeItem("highscore");
  localStorage.removeItem("myscore");

}