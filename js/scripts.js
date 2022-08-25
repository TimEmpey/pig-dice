// Business Logic
function PlayerList() {
  this.players = {}
}

PlayerList.prototype.addPlayer = function(player) {
  this.players[player.name] = player;
}

PlayerList.prototype.findPlayer = function(name) {
  if (this.players[name] !== undefined) {
    return this.players[name]
  }
  return false;
}

Player.prototype.diceRoll = function (min, max) {
  min = Math.ceil(1);
  max = Math.floor(7);
  let number = Math.floor(Math.random() * (max - min) + min);
  if (number !== 1) {
    this.rollArray.push(number)
    return number;
  } else if (number === 1) {
    toggle.switchPlayer();
    return this.rollArray = [0];
  }
}

Player.prototype.currentSum = function () {
  this.currentTotal = 0;
  for (i = 0; i < this.rollArray.length; i++) {
    this.currentTotal += this.rollArray[i];
  } 
  return this.currentTotal;
}

Player.prototype.totalRoll = function () {
  this.total = this.total;
  for (let i = 0; i < this.rollArray.length; i++) {
    this.total += this.rollArray[i];
  } if (this.total >= 100) {
    this.winner();
  } else {
    this.rollArray = [];
    return this.total;
  }
}

function Player(name, variable) {
  this.name = name;
  this.rollArray = [];
  this.total = variable;
  this.activePlayer = 1;
}

function Toggle(playerOne, playerTwo) {
  this.playerOne = playerOne
  this.playerTwo = playerTwo
  this.activePlayer = 1;
}

let toggle;

Toggle.prototype.switchPlayer = function () {
  if (this.activePlayer === 1) {
    this.activePlayer = 2;
    document.querySelector("div#p1Buttons").setAttribute("class", "hidden");
    document.querySelector("div#p2Buttons").removeAttribute("class");
  } else {
    this.activePlayer = 1;
    document.querySelector("div#p2Buttons").setAttribute("class", "hidden");
    document.querySelector("div#p1Buttons").removeAttribute("class");
  }
}

Player.prototype.winner = function() {
  document.querySelector("#winner").removeAttribute("class");
  document.querySelector("#winnerName").innerText = this.name;
}

// UI Logic

let playerList = new PlayerList();

function handleFormSubmission(event) {
  event.preventDefault();
  const playerOneName = document.querySelector("input#player-one-name").value;
  const playerTwoName = document.querySelector("input#player-two-name").value;
  let playerOne = new Player(playerOneName, 0);
  let playerTwo = new Player(playerTwoName, 0);
  toggle = new Toggle(playerOne, playerTwo);
  document.querySelector("div#game").removeAttribute("class");
  document.querySelector("span#scoreNameOne").innerText = playerOne.name + ("'s ");
  document.querySelector("span#scoreNameTwo").innerText = playerTwo.name + ("'s ");
  document.querySelector("div#p1Buttons").removeAttribute("class");
  document.getElementById("rollOne").addEventListener("click", function() {
    let diceRollOne = playerOne.diceRoll();
    diceImage(diceRollOne);
    console.log(diceRollOne);
    document.querySelector("span#turnPlayerOneScore").innerHTML = playerOne.currentSum();
  });
  document.getElementById("rollTwo").addEventListener("click", function() {
    let diceRollTwo = playerTwo.diceRoll();
    diceImage(diceRollTwo);
    document.querySelector("span#turnPlayerTwoScore").innerHTML = playerTwo.currentSum();
  });
  document.getElementById("holdOne").addEventListener("click", function() {
    playerOne.currentSum();
    document.querySelector("span#playerOneScore").innerHTML = playerOne.totalRoll();
    toggle.switchPlayer();
  });
  document.getElementById("holdTwo").addEventListener("click", function() {
    playerTwo.currentSum();
    document.querySelector("span#playerTwoScore").innerHTML = playerTwo.totalRoll();
    toggle.switchPlayer();
  });
}

function diceImage(number) {
  document.getElementById("dieTwo").setAttribute("class", "hidden");
  document.getElementById("dieThree").setAttribute("class", "hidden");
  document.getElementById("dieFour").setAttribute("class", "hidden");
  document.getElementById("dieFive").setAttribute("class", "hidden");
  document.getElementById("dieSix").setAttribute("class", "hidden");
  if (number === 2) {
    document.getElementById("dieTwo").removeAttribute("class");
  } else if (number === 3) {
    document.getElementById("dieThree").removeAttribute("class");
  } else if (number === 4) {
    document.getElementById("dieFour").removeAttribute("class");
  } else if (number === 5) {
    document.getElementById("dieFive").removeAttribute("class");
  } else if (number === 6) {
    document.getElementById("dieSix").removeAttribute("class");
  };
}

window.addEventListener("load", function (){
  document.querySelector("form#playerInput").addEventListener("submit", handleFormSubmission);
});