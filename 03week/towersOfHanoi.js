'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

//I think the logic on the functions would be better with 
//a const function. So I need to capture the value in the array
//the array seems to be inside an object.
// I would need a function that will take a value from one aray
// and place them the other arrays with in stacks

const movePiece= (startStack, endStack)=> {
  // Your code here
  // I am creating a variable with the user input values

  const startMove = stacks[startStack]
  const endMove = stacks[endStack];

  //Add a function that take user input with legal move rules
  //all together shoud take one value from an array an move it
  // to another array with out the vaule being greater than the last value

  if (isLegal(startMove[startMove.length-1], endMove[endMove.length-1])){
    const value = startMove.pop()
    return endMove.push(value);
  } else {
    return 'invalid move'
  }
  
  




}
//islegal function should make rules that if the value taken from
// one array can not be placed on another value that is greater
const isLegal = (startMove, endMove) =>{
  // Your code here
  console.log(startMove, endMove)
  if (endMove === undefined || startMove <= endMove) {
    console.log(true)
    return true
  } else {
    console.log(false)
    return false;
  }
}
//checkforwin should to be able to take the length of the array
// in each object and detect winner
function checkForWin() {
  // Your code here
  if(stacks['b'].length === [4, 3, 2, 1] || stacks['c'].length === [4, 3, 2, 1]) {
    return 'You have won Towers of Hanoi!'
  }
}

//should combine all previous functions and complete program 
function towersOfHanoi(startStack, endStack) {
  // Your code here
    if (movePiece(startStack, endStack)){
      if(checkForWin(startStack, endStack)){
        return 'You have won Towers of Hanoi!'
      }
    }
  
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
