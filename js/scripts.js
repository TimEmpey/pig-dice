// Business Logic for Dice Roll
function diceRoll(min, max) {
  min = Math.ceil(1);
  max = Math.floor(7);
  return Math.floor(Math.random() * (max - min) + min);
}

function totalRoll() {
  rollArray = [];
  return rollArray;
}



//Business Logic for Player
function Player(roll) {
  this.roll = diceRoll;
}