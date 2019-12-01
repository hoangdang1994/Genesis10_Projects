var bet;
var gameState = 'play';

function toggleButton() {
	if (gameState === 'play'){
		document.getElementById('toggle').innerHTML = 'Play Again';
		gameState = 'play again';
		showDiv();
		disableInput();
	}
	else {
		document.getElementById('toggle').innerHTML = 'Play';
		gameState = 'play';
		showDiv();
		disableInput();
	}
}

function showDiv() {
	if (gameState ==='play again'){
		document.getElementById("result").style.display = "block";
	}
   else{
   		document.getElementById("result").style.display = "none";
   }
}

function disableInput(){
	if (gameState ==='play again'){
		document.getElementById('betMoney').disabled = true;
	}
	else {
		document.getElementById('betMoney').disabled = false;
		document.getElementById('betMoney').value='';
	}
}

function validateBet(){
	bet = document.getElementById("betMoney").value;
	if (bet == null || bet <= 0){
		alert("Error: Betting value must be more than $0.00")
		return false;
	}
	else{
		gameLogic();
		return true;
	}
}

function rollDice() {
	var dicy = Math.floor(Math.random() * 6) + 1;
	return dicy;
}

function getMoney(){
	var m = parseInt(bet);
	return m;
}

function gameLogic(){
	var money = getMoney();
	var currentMoney = money;
	var sum = 0;
	var winRollCount = 0;
	var winAmount = currentMoney;
	var rolls = 0;
	var highestCount = 0;
	var highestAmount = currentMoney;

	while (currentMoney > 0){
		// roll dice
		sum = rollDice() + rollDice();
		// counting dice rolls
		rolls += 1;
		// checking the sum pair of dice equal to 7
		if (sum == 7){
			currentMoney += 4;
			winRollCount += 1;
			winAmount += 4;
		}
		// sum pair of dice not equal to 7
		else{
			currentMoney -= 1;
			if (highestAmount < winAmount ){
				highestCount = winRollCount;
				highestAmount = winAmount;
			}
		}
		// reset sum amount
		sum = 0;
	}
//	alert("Starting Bet is "+ getMoney());
//	alert("rolls is "+ rolls);
//	alert("Highest Amount is "+ highestAmount);
//	alert("Highest Count is "+ highestCount);
	// somewhat working
	document.getElementById("startingBet").innerHTML=money;
	document.getElementById("totalRolls").innerHTML=rolls;
	document.getElementById("highestWinAmount").innerHTML=highestAmount;
	document.getElementById("highestWinCount").innerHTML=highestCount;
	toggleButton();

	
}

// somewhat working
//document.getElementById("dice").innerHTML=rollDice();
//document.getElementById("startingBet").innerHTML=getMoney();
//document.getElementById("totalRolls").innerHTML=rolls;
//document.getElementById("highestWinAmount").innerHTML=highestAmount;
//document.getElementById("highestWinCount").innerHTML=highestCount;