'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//The function Checkers sould hold an input of the checkers peice.
//The function I think would work  better as a class
class Checker {
  constructor(color){
    if (color === 'white'){
      this.symbol = 'W'
    }else{
      this.symbol = 'B'
    }
  }
}

//The class board should be able to holdm the checkers class and the grid

class Board {
  constructor() {
    this.checkers = [];
    this.grid = []
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }

  // Your code here
  // Here Should take positions of white pieces, setinng as arrays
  createCheckers(){
    // [row, column]
    const whitePosition = [
      [0, 1],
      [0, 3],
      [0, 5],
      [0, 7],
      [1, 0],
      [1, 2],
      [1, 4],
      [1, 6],
      [2, 1],
      [2, 3],
      [2, 5],
      [2, 7]
    ]
    //the loop should set W on board
    for (let i = 0; i < 12; i++) {
      let whiteRow = whitePosition[i][0];
      let whiteColumn = whitePosition[i][1];
      let whiteChecker = new Checker('white');
      this.checkers.push(whiteChecker); 
      this.grid[whiteRow][whiteColumn] = whiteChecker;
    }
      // this will target the black pieces on board
    const blackPosition = [
      [5, 0],
      [5, 2],
      [5, 4],
      [5, 6],
      [6, 1],
      [6, 3],
      [6, 5],
      [6, 7],
      [7, 0],
      [7, 2],
      [7, 4],
      [7, 6]
    ]
    // the loop will set B pieces on the board
    for (let i = 0; i < 12; i++) {
      let blackRow = blackPosition[i][0];
      let blackColumn = blackPosition[i][1];
      let blackChecker = new Checker('black');
      this.checkers.push(blackChecker);
      this.grid[blackRow][blackColumn] = blackChecker;
    }
  }
}
  

//the class Game will hold the move piece function and create the rules foe moving on the board
class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    this.board.createCheckers();
  }
  moveChecker(source, destination){
    if (isLegalInput(source,destination) &&
      isLegalMove (source, destination)) {
        //this will read the position and destination 
      const sourceRow = parseInt(source.charAt(0));
      const sourceColumn = parseInt(source.charAt(1));
      const destinationRow = parseInt(destination.charAt(0));
      const destinationColumn = parseInt(destination.charAt(1));
      this.board.grid[destinationRow][destinationColumn] = 
      this.board.grid[sourceRow][sourceColumn];
      this.board.grid[sourceRow][sourceColumn] = null;
      //should hold the rule for jumping a piece on the board
      if (Math.abs(destinationRow - sourceRow) === 2) {
        let jumpedRow = destinationRow - sourceRow > 0 ?
          sourceRow + 1 : destinationRow + 1;
        let jumpedColumn = destinationColumn - 
          sourceColumn > 0 ? sourceColumn + 1 :
          destinationColumn + 1;
        this.board.grid[jumpedRow][jumpedColumn] = null;
        this.board.checkers.pop();
      }
  
    } else {
      console.log("invalid")
    }
  }
}
  //should only allow move if the destination is empty and between row and columm 0-8
  const isLegalInput = (source, destination) => {
      const sourceRow = parseInt(source.charAt(0));
      const sourceColumn = parseInt(source.charAt(1));
      const destinationRow = parseInt(destination.charAt(0));
      const destinationColumn = parseInt(destination.charAt(1));
      let sourceGood = (sourceRow >= 0 && sourceRow < 8) &&
          (sourceColumn >= 0 && sourceColumn < 8);
      let destinationGood = (destinationRow >= 0 && destinationRow , 8) &&
           (destinationColumn >= 0 && destinationColumn < 8);
      return (sourceGood && destinationGood);
  }
  //should only allow move if the piece being jumped is 2 columns over and empty destination 
  const isLegalMove = (source, destination) => {
    const sourceRow = parseInt(source.charAt(0));
    const sourceColumn = parseInt(source.charAt(1));
    const destinationRow = parseInt(destination.charAt(0));
    const destinationColumn = parseInt(destination.charAt(1));
    let goodRowMove = (Math.abs(destinationRow - sourceRow) <= 2);
    let goodColumnMove = (Math.abs(destinationColumn - sourceColumn) ===1);
    return (goodRowMove && goodColumnMove);
  }





function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();



// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
