# _Pig Dice_

#### By _**Tim Empey and Ted Gold**_

#### _Allows users to play Pig Dice_

## Github Pages:
### _https://timempey.github.io/pig-dice/_

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_
* _Bootstrap_

## Description

_Starts with two input boxes for users names which are collected with the submit button prompting the score boards to be un-hidden. Two buttons to roll or hold appear allowing users to roll, which logs the number to your turn score and hold which adds your turn score to the total. Rolling a 1 or pressing hold moves the buttons to the second player initiating their turn. First to 100 points wins. This is the wikipedia page to the game: https://en.wikipedia.org/wiki/Pig_%28dice_game%29_

## Setup/Installation Requirements

* _Open up your terminal and navigate to the desired landing folder_
* _In terminal enter, ' "git clone https://github.com/TimEmpey/pig-dice '_
* _In terminal enter 'code .' to open files in Visual Studio Code_
* _In Visual Code Studio select the 'Go Live' option on the bottom task bar_

## Known Bugs

* _There are no known issues_

## Tests
<details>
  <summary>Tests</summary>
  Describe: diceRoll(); 
    <br>
  Test 1: Should result in random number from 1-6 
    <br>
    Code: 
    <br>
    diceRoll(1,7); 
    <br>
    Expected Output: 1 || 2 || 3 || 4 || 5 || 6 
    <br><br>

  Describe: Player(); 
    <br>
  Test 1: Should result in random number from 1-6 for Player. 
    <br>
    Code: 
    <br>
    Player.diceRoll(); 
    <br>
    Expected Output: 1 || 2 || 3 || 4 || 5 || 6 
    <br>

  Describe: rollArray; 
    <br>
  Test 1: Should create an empty array. 
    <br>
    Code: 
    <br>
    playerOne.rollArray;
    <br>
    Expected Output: [] 
    <br>
  Test 2: Should populate array with rolled numbers
     <br>
    Code: 
    <br>
    playerOne.roll(1,2,3);
    playerOne.rollArray;
    <br>
    Expected Output: [1,2,3] 
    <br>

  Describe: currentTotal(); 
    <br>
  Test 1: Should add number in the array
    <br>
    Code: 
    <br>
  playerOne.rollArray[1,2,3];
  PlayerOne.currentTotal();
    <br>
    Expected Output: 6 
    <br>

  Describe: totalRoll(); 
    <br>
  Test 1: Should add currentTotal to the totalRoll
    <br>
    Code: 
  playerOne.rollArray[1,2,3];
  PlayerOne.currentTotal();
  > 6 
  playerOne.rollArray[1,2,3];
  PlayerOne.totalRoll(); 
    <br>
    Expected Output: 12
    <br>

</details>

## License

_[MIT](https://en.wikipedia.org/wiki/MIT_License)_

Copyright (c) _2022_ _Timothy Empey & Ted Gold_

