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
}

Player.prototype.winner = function() {
  document.querySelector("#winner").removeAttribute("class");
  document.querySelector("#winnerName").innerText = this.name;
}

// UI Logic



// let playerList = new PlayerList();

// function displayScore(event) {
//   const player1 = document.querySelector("input#player-one-name").value;
//   const player2 = document.querySelector("input#player-two-name").value;
//   document.querySelector("span#scoreNameOne").innerText = player1.playerNameOne + (" ");
//   document.querySelector("span#scoreNameTwo").innerText = player2.playerNameTwo + (" ");
// }

// function handleFormSubmission(event) {
//   event.preventDefault();
//   const playerOneName = document.querySelector("input#player-one-name").value;
//   const playerTwoName = document.querySelector("input#player-two-name").value;
//   let playerOne = new Player(playerOneName, 0);
//   let playerTwo = new Player(playerTwoName, 0);
//   playerList.addPlayer(playerOne);
//   playerList.addPlayer(playerTwo);
//   displayScore(playerList);
// }

// window.addEventListener("load", function (){
//   document.querySelector("form#playerNameOne").addEventListener("submit", handleFormSubmission);
//   document.querySelector("form#playerNameTwo").addEventListener ("submit", handleFormSubmission);
// });