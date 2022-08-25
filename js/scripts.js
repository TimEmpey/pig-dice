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
  } else if (number === 1) {
    return rollArray = []
  }
}

Player.prototype.currentSum = function () {
  this.currentTotal = 0;
  for (i = 0; i < this.rollArray.length; i++) {
    this.currentTotal += this.rollArray[i];
  }  if (this.total >= 100) {
    this.winner();
  }
  return this.currentTotal;
}

Player.prototype.totalRoll = function () {
  this.total = this.total;
  for (let i = 0; i < this.rollArray.length; i++) {
    this.total += this.rollArray[i];
  }
  this.rollArray = [];
  return this.total;
}

function Player(name, variable) {
  this.name = name;
  this.rollArray = [];
  this.total = variable;
  this.activePlayer = 1;
}

let player;

Player.prototype.switchPlayer = function () {
  if (this.activePlayer === 1) {
    document.querySelector("div#p1Button").setAttribute("class", "hidden");
    document.querySelector("div#p2Button").removeAttribute("class");
  } else {
    document.querySelector("div#p2Button").setAttribute("class");
    document.querySelector("div#p1Button").removeAttribute("class", "hidden");
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
  player = new Player(playerOne, playerTwo);
  document.querySelector("div#game").removeAttribute("class");
  document.querySelector("span#scoreNameOne").innerText = playerOne.name + ("'s ");
  document.querySelector("span#scoreNameTwo").innerText = playerTwo.name + ("'s ");
  document.querySelector("div#p1Buttons").removeAttribute("class");
  document.getElementById("rollOne").addEventListener("click", function() {
    playerOne.diceRoll();
    document.querySelector("span#turnPlayerOneScore").innerHTML = playerOne.currentSum();
  });
  document.getElementById("rollTwo").addEventListener("click", function() {
    playerTwo.diceRoll();
    document.querySelector("span#turnPlayerTwoScore").innerHTML = playerTwo.currentSum();
  });
  document.getElementById("holdOne").addEventListener("click", function() {
    playerOne.currentScore();
    document.querySelector("span#playerOneScore").innerHTML = playerOne.total();
    playerOne.switchPlayer();
  });
  document.getElementById("holdTwo").addEventListener("click", function() {
    playerTwo.currentScore();
    document.querySelector("span#playerTwoScore").innerHTML = playerTwo.total();
    playerTwo.switchPlayer();
  });
}

window.addEventListener("load", function (){
  document.querySelector("form#playerInput").addEventListener("submit", handleFormSubmission);
});