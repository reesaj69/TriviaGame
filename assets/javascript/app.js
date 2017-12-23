setTimeout(fiveSeconds, 1000 * 5);
setTimeout(tenSeconds, 1000 * 10);
setTimeout(timeUp, 1000 * 15);

function fiveSeconds() {
 
  $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
  console.log("10 seconds left");
}
function tenSeconds() {
  
  $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
  console.log("5 seconds left");
}
function timeUp() {
  
  console.log("done");
  $("#time-left").append("<h2>Time's Up!</h2>");
  console.log("time is up");

}
fiveSeconds();
tenSeconds();
timeUp();


function submitAnswers(){


	var total = 5;
	//var score = 0;
	var correctAnswers = 0;
	var incorrectAnswers = 0;
	//get user input

	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;

	

	//Validation
	
	for(i = 1; i <= total; i++){
		if(eval('q' +i) == null || eval('q' +i) == ''){
		alert('You missed question '+ i);
		return false;
		}
	}

//Set correct answers
	var answers = ["a", "a", "c", "a", "a"];

	//Check answers

	for (i = 1; i <= total; i++){
		if (eval('q'+i) == answers [i-1]){
			//score++;
			correctAnswers++;
			$('#numberOfCorrectAnswers').text(correctAnswers);
		}else{
			incorrectAnswers++;
			$('#numberOfIncorrectAnswers').text(incorrectAnswers);

		}
	}

	return false;

submitAnswers();

}



//Things to work on in code:  the setTimeOut Event and the Reset button



