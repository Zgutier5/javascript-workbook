'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//I am guessing this is the array that would use the user input to store the
// data.
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];


let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

//The function should take all outcomes from each row and decide if they are true
// and should just need an if statement. 

function horizontalWin() {
  // Your code here
  if( board[0][0] == playerTurn && board[0][1] == playerTurn && board[0][2] == playerTurn ||
    board[1][0] == playerTurn && board[1][1] == playerTurn && board[1][2] == playerTurn ||
    board[2][0] == playerTurn && board[2][1] == playerTurn && board[2][2] == playerTurn){
      return true
    } else {
      return false
    }
}

//This function should do the same thing as the horizontal function. 
// I will use a if statement to tell if each winning colum is true

function verticalWin() {
  // Your code here
  if( board[0][0] == playerTurn && board[1][0] == playerTurn && board[2][0] == playerTurn ||
      board[0][1] == playerTurn && board[1][1] == playerTurn && board[2][1] == playerTurn ||
      board[0][2] == playerTurn && board[1][2] == playerTurn && board[2][2] == playerTurn) {
        return true
      } else {
        return false
      }
}

//This function should take the same if statement and take the winning diagonal 
//combinations and tell if they're true
function diagonalWin() {
  // Your code here
  if(board[0][0] == playerTurn && board[1][1] == playerTurn  && board[2][2] == playerTurn ||
     board[0][2] == playerTurn  && board[1][1] == playerTurn  && board[2][0] == playerTurn) {
       return true
     } else {
       return false
     }
}

// This function should combine all previous functions and check if all are true
function checkForWin() {
  // Your code here
  if( horizontalWin() || verticalWin() || diagonalWin() ) {
    return true
  } else {
    return false
  }
}

//This function should be taking if statements that will take the board inputs
// and store them on the board. It should about take a function that changes players

function ticTacToe(row, column) {
  // Your code here
  if( board[row][column] == ' '){
    board[row][column] = playerTurn;
    if( checkForWin() ){
      board[0] =[ ' ', ' ', ' '];
      board[1] =[ ' ', ' ', ' '];
      board[2] =[ ' ', ' ', ' '];
      console.log(playerTurn + ' Wins the game!');
    } else {
      playerTurn == 'X' ? playerTurn = 'O' : playerTurn = 'X';
    }
  }
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
