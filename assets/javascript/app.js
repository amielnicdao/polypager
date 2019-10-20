
$(document).ready(function () {
	var questionIndex = 0;
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;

	function qAndA() {
		$("#game").append("<p><strong>" +
			questionArray[questionIndex].question +
			"</p><p class='choices'>" +
			questionArray[questionIndex].choices[0] +
			"</p><p class='choices'>" +
			questionArray[questionIndex].choices[1] +
			"</p><p class='choices'>" +
			questionArray[questionIndex].choices[2] +
			"</p><p class='choices'>" +
			questionArray[questionIndex].choices[3] +
			"</strong></p>");
	}

	function startGame() {
		questionIndex = 0;
		correct = 0;
		incorrect = 0;
		unanswered = 0;
	}
	
	function countdown() {
			if (time < 1) {
				clearInterval(ticker);
				timeZero();
			}

			if (time > 0) {
				time--;
			}

			$("#timer").html("<h1>" + time + "</h1>");

		}

	function timer() {
			ticker = setInterval(countdown, 1000);		
		}

	function win() {
		$("#game").html("<p>That's right!</p>");
		correct++;
		$("#game").append(questionArray[questionIndex].image);
		setTimeout(nextQuestion, 2000);
		questionIndex++;
	}

	function lose() {
		$("#game").text("That's incorrect!");
		incorrect++;
		var answer = questionArray[questionIndex].answer;
		$("#game").append("<p>The answer is <span class='answer'>" +
			answer +
			"</span></p>" +
			questionArray[questionIndex].image);
		setTimeout(nextQuestion, 4000);
		questionIndex++;
	}

	function timeZero() {
		if (time === 0) {
			$("#game").text("You're out of time!");
			unanswered++;
			var answer = questionArray[questionIndex].answer;
			$("#game").append("<p>The answer is <span class='answer'>" +
				answer +
				"</span></p>" +
				questionArray[questionIndex].image);
			setTimeout(nextQuestion, 4000);
			questionIndex++;
		}
	}

	function nextQuestion() {
		if (questionIndex < questionArray.length) {
			time = 10;
			$("#game").html("<span id='timer'>" + "<h1>" + time + "</h1>");
			qAndA();
			timer();
			timeZero();
		}

		else {
			results();
		}
	}

	function results() {
		$("#game").html("<p><strong>Correct: </p>" + correct +
			"<p><strong>Incorrect: </p>" + incorrect +
			"<p><strong>Unanswered: </p>" + unanswered);
		$("#game").append("<h1 id='startGame'>Another Round?</h1>")
		$("#startGame").click(nextQuestion);
		startGame();
	}

	$("#startGame").click(nextQuestion);

	$("#game").on("click", ".choices", (function () {
		var userChoice = $(this).text();
		if (userChoice === questionArray[questionIndex].answer) {
			clearInterval(ticker);
			win();
		}

		else {
			clearInterval(ticker);
			lose();
		}

	}));
});

