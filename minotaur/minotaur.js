"use strict"

//function rollDie(numOfSides) {
//	return Math.floor(Math.random() * numOfSides +1); 
//}

//Now roll to see which weapon the Minotaur will use.
//You each have 100 HP.  You get the first attack.
//If you roll the highest value on your die, you recover 
//that amount in addition to afflicting that amount of damage,
//up to 100 points.
//The first one to get their opponent's HP to 0 or less wins.

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
//var = randomNumber

alert ("You\'ve reached the 7th Circle of Hell!\nYou must defeat the demon Minotaur to escape!\nRoll the 6-sided die to see which weapon you will use:\n1=4-sided\n2=6-sided\n3=8-sided\n4=10-sided\n5=12-sided\n6=20-sided");
var selectMyWeapon = Math.floor(Math.random() * 6) + 1;

switch(selectMyWeapon) {
	case 1:
		//call function for using 4-sided die;
		console.log("You rolled a 1.  You will use the 4-sided die.")
		break;
	case 2:
		//call function for using 6-sided die;
		console.log("You rolled a 2.  You will use the 6-sided die.")
		break;
	case 3:
		//call function for using 8-sided die;
		console.log("You rolled a 3.  You will use the 8-sided die.")
		break;
	case 4:
		//call function for using 10-sided die;
		console.log("You rolled a 4.  You will use the 10-sided die.")
		break;
	case 5:
		//call function for using 12-sided die;
		console.log("You rolled a 5.  You will use the 12-sided die.")
		break;
	case 6:
		//call function for using 20-sided die;
		console.log("You rolled a 6.  You will use the 20-sided die.")
		break;
}
var myWeapon = selectMyWeapon;
//capture result in a var myWeapon and var minotaurWeapon
alert("Roll the 6-sided die to determine the Minotaur's weapon:");
var selectMinotaurWeapon = Math.floor(Math.random() * 6) + 1;

switch(selectMinotaurWeapon) {
	case 1:
		//call function for using 4-sided die;
		console.log("You rolled a 1.  The Minotaur will use the 4-sided die.")
		break;
	case 2:
		//call function for using 6-sided die;
		console.log("You rolled a 2.  The Minotaur will use the 6-sided die.")
		break;
	case 3:
		//call function for using 8-sided die;
		console.log("You rolled a 3.  The Minotaur will use the 8-sided die.")
		break;
	case 4:
		//call function for using 10-sided die;
		console.log("You rolled a 4.  The Minotaur will use the 10-sided die.")
		break;
	case 5:
		//call function for using 12-sided die;
		console.log("You rolled a 5.  The Minotaur will use the 12-sided die.")
		break;
	case 6:
		//call function for using 20-sided die;
		console.log("You rolled a 6.  The Minotaur will use the 20-sided die.")
		break;
}
var minotaurWeapon = selectMinotaurWeapon;
//var myWeapon = (result of switchcase)
//var minotaurWeapon = (result of switchcase)
//var myHighestRoll = highest number on whatever wapon is selected
//var minotaurHighestRoll = highest number on whatever wapon is selected
var myMaxHP = 100;
var minotaurMaxHP = 100;
var myCurrentDamage = 0;
var minotaurCurrentDamage = 0;
//for/*while?*/ battleMinotaur (/*myCurrentDamage > 100 || minotaurCurrentDamage > 100 */) {

	//loop my rolls/attacks
	//save to an array/ressign variable corresponsing to minotaur's HP
	//accumulate damages, continue as long as less than HP
	//report My HP and Minotaur HP after every roll by subtracting 
	//accumulated damages from myMaxHP and minotaurMaxHP.

	alert("Your roll.  Brace yourself and ATTACK!");
	function myAttack(myWeapon) {
		switch (myWeapon) {
			case 1:
				var myRollResult = weapon4();
				break;
			case 2:
				var myRollResult = weapon6();
				break;
			case 3:
				var myRollResult = weapon8();
				break;
			case 4:
				var myRollResult = weapon10();
				break;
			case 5:
				var myRollResult = weapon12();
				break;
			case 6:
				var myRollResult = weapon20();
				break;
		}
		console.log("You caused " + myRollResult + " damage to the Minotaur!\nThe Minotaur has " + (minotaurMaxHP - minotaurCurrentDamage) + " HP remaining.");

		//roll, and add number onto var minotaurCurrentDamage +=
		//if roll=var myHighestRoll, subtract from myCurrentDamage
		// var minotaurMaxHP > 0, if true, continue
		//else return console.log("You defeated the Minotaur!")
	}
	myAttack(selectMyWeapon);

	alert("Minotaur is attacking!  Defend yourself!");
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
	console.log("The Minotaur caused " + minotaurRollResult + " damage to you!\nYou have " + (myMaxHP - myCurrentDamage) + " HP remaining.");
		//roll, and add number onto var myCurrentDamage +=
		//if roll=var minotaurHighestRoll, subtract from minotaurCurrentDamage
		//var myMaxHP > 0, if true, continue
		//else return console.log("You lose message")
	}
	minotaurAttack(selectMinotaurWeapon);