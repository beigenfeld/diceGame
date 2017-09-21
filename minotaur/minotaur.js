"use strict"

function weapon4 () {
	var randomNumber = Math.floor(Math.random() * 4) + 1;
	return randomNumber;
}

function weapon6 () {
	var randomNumber = Math.floor(Math.random() * 6) + 1;
	return randomNumber;
}

function weapon8 () {
	var randomNumber = Math.floor(Math.random() * 8) + 1;
	return randomNumber;
}

function weapon10 () {
	var randomNumber = Math.floor(Math.random() * 10) + 1;
	return randomNumber;
}

function weapon12 () {
	var randomNumber = Math.floor(Math.random() * 12) + 1;
	return randomNumber;
}

function weapon20 () {
	var randomNumber = Math.floor(Math.random() * 20) + 1;
	return randomNumber;
}

function myAttack(myWeapon) {
	var myRollResult;
	var maxRoll;

	switch (myWeapon) {
		case 1:
			myRollResult = weapon4();
			maxRoll = 4;
			break;
		case 2:
			myRollResult = weapon6();
			maxRoll = 6;
			break;
		case 3:
			myRollResult = weapon8();
			maxRoll = 8;
			break;
		case 4:
			myRollResult = weapon10();
			maxRoll = 10;
			break;
		case 5:
			myRollResult = weapon12();
			maxRoll = 12;
			break;
		case 6:
			myRollResult = weapon20();
			maxRoll = 20;
			break;
	}

	if (myRollResult === maxRoll) {
		gainLife(maxRoll);
		console.log("POWER HIT!  You have gained the vitality lost by the Minotaur! Your HP increased by " + maxRoll + " and is now " + (myMaxHP - myCurrentDamage));
	
	}
	minotaurCurrentDamage += myRollResult;
	if (minotaurCurrentDamage < minotaurMaxHP) {
		console.log("You caused " + myRollResult + " damage to the Minotaur!\nThe Minotaur has " + (minotaurMaxHP - minotaurCurrentDamage) + " HP remaining.");
	} else {
		console.log("You caused " + myRollResult +  " damage.  You killed the Minotaur!\nYou have escaped the 7 circles of Hell!");
	}
}

function minotaurAttack(minotaurWeapon) {
	switch (minotaurWeapon) {
		case 1:
			var minotaurRollResult = weapon4();
			break;
		case 2:
			var minotaurRollResult = weapon6();
			break;
		case 3:
			var minotaurRollResult = weapon8();
			break;
		case 4:
			var minotaurRollResult = weapon10();
			break;
		case 5:
			var minotaurRollResult = weapon12();
			break;
		case 6:
			var minotaurRollResult = weapon20();
			break;
	}
	myCurrentDamage += minotaurRollResult;
	if (myCurrentDamage < myMaxHP) {
		console.log("The Minotaur caused " + minotaurRollResult + " damage to you!\nYou have " + (myMaxHP - myCurrentDamage) + " HP remaining.");
	} else {
		console.log("The Minotaur caused " + minotaurRollResult + " damage to you!\nYou have been slain by the Minotaur.\nENJOY YOUR ETERNITY IN HELL!")
	}

}

alert ("You\'ve reached the 7th Circle of Hell!\nYou must defeat the demon Minotaur to escape!\nRoll the 6-sided die to see which weapon you will use:\n1=4-sided\n2=6-sided\n3=8-sided\n4=10-sided\n5=12-sided\n6=20-sided");
var selectMyWeapon = Math.floor(Math.random() * 6) + 1;

switch(selectMyWeapon) {
	case 1:
		console.log("You rolled a 1.  You will use the 4-sided die.")
		break;
	case 2:
		console.log("You rolled a 2.  You will use the 6-sided die.")
		break;
	case 3:
		console.log("You rolled a 3.  You will use the 8-sided die.")
		break;
	case 4:
		console.log("You rolled a 4.  You will use the 10-sided die.")
		break;
	case 5:
		console.log("You rolled a 5.  You will use the 12-sided die.")
		break;
	case 6:
		console.log("You rolled a 6.  You will use the 20-sided die.")
		break;
}
var myWeapon = selectMyWeapon;
alert("Roll the 6-sided die to determine the Minotaur's weapon:");
var selectMinotaurWeapon = Math.floor(Math.random() * 6) + 1;

switch(selectMinotaurWeapon) {
	case 1:
		console.log("You rolled a 1.  The Minotaur will use the 4-sided die.")
		break;
	case 2:
		console.log("You rolled a 2.  The Minotaur will use the 6-sided die.")
		break;
	case 3:
		console.log("You rolled a 3.  The Minotaur will use the 8-sided die.")
		break;
	case 4:
		console.log("You rolled a 4.  The Minotaur will use the 10-sided die.")
		break;
	case 5:
		console.log("You rolled a 5.  The Minotaur will use the 12-sided die.")
		break;
	case 6:
		console.log("You rolled a 6.  The Minotaur will use the 20-sided die.")
		break;
}
var minotaurWeapon = selectMinotaurWeapon;

function gainLife (maxRoll) {
	myCurrentDamage -= maxRoll;
	if (myCurrentDamage <= 0) {
		myCurrentDamage = 0;
	}
}

var myMaxHP = 100;
var minotaurMaxHP = 100;
var myCurrentDamage = 0;
var minotaurCurrentDamage = 0;

while (myCurrentDamage < myMaxHP && minotaurCurrentDamage < minotaurMaxHP) {
	alert("Your roll.  Brace yourself and ATTACK!");
	myAttack(selectMyWeapon);
	if(minotaurCurrentDamage < minotaurMaxHP) {
		alert("Minotaur is attacking!  Defend yourself!");
		minotaurAttack(selectMinotaurWeapon);
	}
} 

console.log("Battle Over");