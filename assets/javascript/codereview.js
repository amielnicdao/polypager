
$(document).ready(function () {
    var questionArray = [
        {
            question: "What are the three types of starter Pokemon?",
            choices: ["Grass, Fire, Water", "Grass, Psychic, Fighting", "Lightning, Dark, Fire", "Water, Normal, Grass"],
            answer: "Grass, Fire, Water",
            image: "<img src='assets/images/pokeball.jpg' class='img'>"
        },
        {
            question: "In Generation 1, which Pokemon was known for its lethal punches?",
            choices: ["Hitmonlee", "Hitmonchan", "Machamp", "Primeape"],
            answer: "Hitmonchan",
            image: "<img src='assets/images/fighting.png' class='img'>"
        },
        {
            question: "What type of attack are flying Pokemon immune to?",
            choices: ["Ground", "Lightning", "Poison", "Dark"],
            answer: "Ground",
            image: "<img src='assets/images/flying.jpg' class='img'>"
        },
        {
            question: "Which of these is NOT a potential status ailment in a battle?",
            choices: ["Poison", "Sleep", "Confusion", "Faint"],
            answer: "Faint",
            image: "<img src='assets/images/status.jpg' class='img'>"
        },
        {
            question: "What's the device trainers use to keep track of their Pokemon encounters?",
            choices: ["Ippo", "Poketrack", "SmartPoke", "Pokedex"],
            answer: "Pokedex",
            image: "<img src='assets/images/pokedex.png' class='img'>"
        },
    ];
    
	var questionIndex = 0;
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;

	function addQAndAtoDOM() {
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

		if (time > 1) {
			time--;
			$("#timer").html("<h1>" + time + "</h1>");
		} else {
			clearInterval(ticker);
			timeIsZero();
		}

	}

	function startTimer() {
		ticker = setInterval(countdown, 1000);
	}

	function correctAnswerChosen() {
		$("#game").html("<p>That's right!</p>");
		correct++;
		$("#game").append(questionArray[questionIndex].image);
		callNextQuestion(2000)
	}

	function wrongAnswerChosen() {
		$("#game").text("That's incorrect!");
		incorrect++;
		var answer = questionArray[questionIndex].answer;
		$("#game").append("<p>The answer is <span class='answer'>" +
			answer +
			"</span></p>" +
			questionArray[questionIndex].image);
		callNextQuestion();
	}

	function callNextQuestion() {
		setTimeout(nextQuestion, 4000);
		questionIndex++;
	}
	
	function timeIsZero() {
		$("#game").text("You're out of time!");
		unanswered++;
		var answer = questionArray[questionIndex].answer;
		$("#game").append("<p>The answer is <span class='answer'>" +
			answer +
			"</span></p>" +
			questionArray[questionIndex].image);
		callNextQuestion();
	}

	function nextQuestion() {
		if (questionIndex < questionArray.length) {
			time = 10;
			$("#game").html("<span id='timer'>" + "<h1>" + time + "</h1>");
			addQAndAtoDOM();
			startTimer();
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
			correctAnswerChosen();
		}

		else {
			clearInterval(ticker);
			wrongAnswerChosen();
		}

	}));
});
