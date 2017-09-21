"use strict"
function loadMinotaur() {
	window.location.href = "minotaur/minotaurIndex.html";
}
function runSeventhCircle (){
	console.clear();
	alert("Are you ready to roll the 4-sided die?");
	var roll4Side = Math.floor(Math.random() * 4) + 1;
	var loser = ("YOU LOSE! PREPARE FOR YOUR JOURNEY TO HELL!!");
	console.log("You rolled a " + roll4Side);
	console.log("You opened the First Gate! Proceed to the 2nd Circle!");

	alert("Are you ready to roll the 6-sided die?");
	var roll6Side = Math.floor(Math.random() * 6) + 1;
	console.log("You rolled a " + roll6Side);
	if (roll6Side>=roll4Side) {
		console.log("You opened the Second Gate! Proceed to the 3rd Circle!");
	} else {
		console.log("YOU LOSE! PREPARE FOR YOUR JOURNEY TO HELL!!");
		return loser;
	}

	alert("Are you ready to roll the 8-sided die?");
	var roll8Side = Math.floor(Math.random() * 8) + 1;
	console.log("You rolled a " + roll8Side);
	if (roll8Side>=roll6Side) {
		console.log("You opened the Third Gate! Proceed to the 4th Circle!");
	} else {
		console.log("YOU LOSE! PREPARE FOR YOUR JOURNEY TO HELL!!");
		return loser;
	}

	alert("Are you ready to roll the 10-sided die?");
	var roll10Side = Math.floor(Math.random() * 10) + 1;
	console.log("You rolled a " + roll10Side);
	if (roll10Side>=roll8Side) {
		console.log("You opened the Fourth Gate! Proceed to the 5th Circle!");
	} else {
		console.log("YOU LOSE! PREPARE FOR YOUR JOURNEY TO HELL!!");
		return loser;
	}

	alert("Are you ready to roll the 12-sided die?");
	var roll12Side = Math.floor(Math.random() * 12) + 1;
	console.log("You rolled a " + roll12Side);
	if (roll12Side>=roll10Side) {
		console.log("You opened the Fifth Gate! Proceed to the 6th Circle!");
	} else {
		console.log("YOU LOSE! PREPARE FOR YOUR JOURNEY TO HELL!!");
		return loser;
	}

	alert("Are you ready to roll the 20-sided die?");
	var roll20Side = Math.floor(Math.random() * 20) + 1;
	console.log("You rolled a " + roll20Side);
	var success = false;
	if (roll20Side>=roll12Side) {
		console.log("You opened the Sixth Gate! Congratulations! You've made it to the 7th Circle!");
		success = true;
	} else {
		console.log("YOU LOSE! PREPARE FOR YOUR JOURNEY TO HELL!!");
		return loser;
	}
	if (success = true) {
		//hide first button - document.getElementById(“startButton”).style.display=“none”;
		//run function to show hidden button Exit Hell's Gates
	}
}