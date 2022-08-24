// Business Logic for Dice Roll
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

//Business Logic for Player
function Player(variable) {
  this.rollArray = [];
  this.total = variable;
}

