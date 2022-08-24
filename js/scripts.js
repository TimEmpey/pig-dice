// Business Logic for Dice Roll
rollArray = [];
function diceRoll(min, max) {
  min = Math.ceil(1);
  max = Math.floor(7);
  return rollArray.push(Math.floor(Math.random() * (max - min) + min));
}

//Business Logic for Player
function Player(roll) {
  this.roll = diceRoll;
}