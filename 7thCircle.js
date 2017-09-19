"use strict"

//roll the 4-sided die, you must get a higher value on the next-highest number sided die to continue.
//if you make it through all 6 dies, you WIN!

confirm("Are you ready to roll the 4-sided die?");
var roll4Side = Math.random() * 4;
var displayRoll4side = Math.ceil(roll4Side);
var loser = ("YOU LOSE! PREPARE FOR YOUR JOURNEY TO HELL!!");
console.log("You rolled a " + displayRoll4side);
console.log("You opened the First Gate! Proceed to the 2nd Circle!");

function seventhCircle (displayRoll4side){
	confirm("Are you ready to  the 6-sided die?");
	var roll6Side = Math.random() * 6;
	var displayRoll6side = Math.ceil(roll6Side);
	console.log("You rolled a " + displayRoll6side);
	if (displayRoll6side>=displayRoll4side) {
		console.log("You opened the Second Gate! Proceed to the 3rd Circle!");
	} else {
		console.log("YOU LOSE! PREPARE FOR YOUR JOURNEY TO HELL!!");
		return loser;
	}

	confirm("Are you ready to roll the 8-sided die?");
	var roll8Side = Math.random() * 8;
	var displayRoll8side = Math.ceil(roll8Side);
	console.log("You rolled a " + displayRoll8side);
	if (displayRoll8side>=displayRoll6side) {
		console.log("You opened the Third Gate! Proceed to the 4th Circle!");
	} else {
		console.log("YOU LOSE! PREPARE FOR YOUR JOURNEY TO HELL!!");
		return loser;
	}

	confirm("Are you ready to roll the 10-sided die?");
	var roll10Side = Math.random() * 10;
	var displayRoll10side = Math.ceil(roll10Side);
	console.log("You rolled a " + displayRoll10side);
	if (displayRoll10side>=displayRoll8side) {
		console.log("You opened the Fourth Gate! Proceed to the 5th Circle!");
	} else {
		console.log("YOU LOSE! PREPARE FOR YOUR JOURNEY TO HELL!!");
		return loser;
	}

	confirm("Are you ready to roll the 12-sided die?");
	var roll12Side = Math.random() * 12;
	var displayRoll12side = Math.ceil(roll12Side);
	console.log("You rolled a " + displayRoll12side);
	if (displayRoll12side>=displayRoll10side) {
		console.log("You opened the Fifth Gate! Proceed to the 6th Circle!");
	} else {
		console.log("YOU LOSE! PREPARE FOR YOUR JOURNEY TO HELL!!");
		return loser;
	}

	confirm("Are you ready to roll the 20-sided die?");
	var roll20Side = Math.random() * 20;
	var displayRoll20side = Math.ceil(roll20Side);
	console.log("You rolled a " + displayRoll20side);
	if (displayRoll20side>=displayRoll12side) {
		console.log("You opened the Sixth Gate! Congratulations! You've made it to the 7th Circle!");
	} else {
		console.log("YOU LOSE! PREPARE FOR YOUR JOURNEY TO HELL!!");
		return loser;
	}
}
seventhCircle(displayRoll4side);