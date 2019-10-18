// var of what I need to keep track of
// function to reset game and start game
// function to check if winner got the answer right or not
// function to add to wins or losses or unanswered 
// some sort of loop or function that goes through each question
//function to show results

$(document).ready(function () {
	var questionList = 0;
	var time = 5;
	var correct = 0
	var wrong = 0;
	var unanswered = 0;

	var questionArray = [
		{
			question: "What are the three types of starter Pokemon?",
			options: ["Grass, Fire, Water", "Grass, Psychic, Fighting", "Lightning, Dark, Fire", "Water, Normal, Grass"],
			answer: "Grass, Fire, Water",
			image: "<img src='assets/images/pokeball.jpg' class='img'>"
		},
		{
			question: "In Generation 1, which Pokemon was known for its lethal punches?",
			options: ["Hitmonlee", "Hitmonchan", "Machamp", "Primeape"],
			answer: "Hitmonchan",
			image: "<img src='assets/images/fighting.png' class='img'>"
		},
		{
			question: "What type of attack are flying Pokemon immune to?",
			options: ["Ground", "Lightning", "Poison", "Dark"],
			answer: "Ground",
			image: "img src='assets/images/flying.jpg' class='img'>"
		},
		{
			question: "Which of these is NOT a potential status ailment in a battle?",
			options: ["Poison", "Sleep", "Confusion", "Faint"],
			answer: "Faint",
			image: "<img src='assets/images/status.jpg' class='img'>"
		},
		{
			question: "What's the device trainers use to keep track of their Pokemon encounters?",
			options: ["Ippo", "Poketrack", "SmartPoke", "Pokedex"],
			answer: "Pokedex",
			image: "img src='assets/images/pokedex.png' class='img'>"
		},
	];

	function startGame() {
		$("#game").text(time);
		$("#startGame").hide();
		questionList();
		countdown(); //make this function
		timeZero();
	}

	function win() {
		$("#game").text("That's right!");
		correct++;
		var answer = questionArray[questionList].answer;
		$("#game").append("<img src='questionArray[questionList].image'>");
		setTimeout(nextQuestion,3000);
		questionList++;
	}

	function lose() {
		$("#game").text("That's incorrect!");
		wrong++;
		var answer = questionArray[questionList].answer;
		$("#game").append("<p>The answer is" + answer + "<img src='questionArray[questionList].image'>");
		setTimeout(nextQuestion,3000);
		questionList++;
	}

	function timeZero() {
		if (time === 0) {
			$("#game").text("You're out of time!");	
			unanswered++;
			var answer = questionArray[questionList].answer;
		$("#game").append("<p>The answer is" + answer + "<img src='questionArray[questionList].image'>");
		setTimeout(nextQuestion,3000);
		questionList++;
		}
	}
})