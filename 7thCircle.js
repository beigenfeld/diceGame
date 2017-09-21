"use strict"

//roll the 4-sided die, you must get a higher value on the next-highest number sided die to continue.
//if you make it through all 6 dies, you WIN!

alert("Are you ready to roll the 4-sided die?");
var roll4Side = Math.floor(Math.random() * 4) + 1;
var loser = ("YOU LOSE! PREPARE FOR YOUR JOURNEY TO HELL!!");
console.log("You rolled a " + displayRoll4side);
console.log("You opened the First Gate! Proceed to the 2nd Circle!");

function seventhCircle (displayRoll4side){
	alert("Are you ready to roll the 6-sided die?");
	var roll6Side = Math.floor(Math.random() * 6) + 1;
	console.log("You rolled a " + Roll6side);
	if (Roll6side>=Roll4side) {
		console.log("You opened the Second Gate! Proceed to the 3rd Circle!");
	} else {
		console.log("YOU LOSE! PREPARE FOR YOUR JOURNEY TO HELL!!");
		return loser;
	}

	alert("Are you ready to roll the 8-sided die?");
	var roll8Side = Math.floor(Math.random() * 8) + 1;
	console.log("You rolled a " + Roll8side);
	if (Roll8side>=Roll6side) {
		console.log("You opened the Third Gate! Proceed to the 4th Circle!");
	} else {
		console.log("YOU LOSE! PREPARE FOR YOUR JOURNEY TO HELL!!");
		return loser;
	}

	alert("Are you ready to roll the 10-sided die?");
	var roll10Side = Math.floor(Math.random() * 10) + 1;
	console.log("You rolled a " + Roll10side);
	if (Roll10side>=Roll8side) {
		console.log("You opened the Fourth Gate! Proceed to the 5th Circle!");
	} else {
		console.log("YOU LOSE! PREPARE FOR YOUR JOURNEY TO HELL!!");
		return loser;
	}

	alert("Are you ready to roll the 12-sided die?");
	var roll12Side = Math.floor(Math.random() * 12) + 1;
	console.log("You rolled a " + Roll12side);
	if (Roll12side>=Roll10side) {
		console.log("You opened the Fifth Gate! Proceed to the 6th Circle!");
	} else {
		console.log("YOU LOSE! PREPARE FOR YOUR JOURNEY TO HELL!!");
		return loser;
	}

	alert("Are you ready to roll the 20-sided die?");
	var roll20Side = Math.floor(Math.random() * 20) + 1;
	console.log("You rolled a " + Roll20side);
	if (Roll20side>=Roll12side) {
		console.log("You opened the Sixth Gate! Congratulations! You've made it to the 7th Circle!");
	} else {
		console.log("YOU LOSE! PREPARE FOR YOUR JOURNEY TO HELL!!");
		return loser;
	}
}
seventhCircle(roll4Side);