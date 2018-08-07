'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//This will be the array we need to access to move piece by piece.

const stacks = {
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

  console.log(startMove, endMove)
  if (endMove === undefined || startMove <= endMove) {
    console.log(true)
    return true;
  } else {
    return false;
  }
}
//checkforwin should to be able to take the length of the array
// in each object and detect winner
const checkForWin = ()=> {

  if(stacks.b.length === 4 || stacks.c.length === 4) {
    return true
  } else {
    return false
  }
}

//should combine all previous functions and complete program 
const towersOfHanoi= (startStack, endStack)=> {
  
    if (movePiece(startStack, endStack)){
      if(checkForWin(startStack, endStack)){
        console.log('You have won Towers of Hanoi!')
        return true
      } else {
        return false
      };
    };
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

  //I will make 2 test that describe the moviePiece function and the new
  //towersOfHanoi function:
  //First the moviePiece function should move the last value in array


  describe('#movePice()', () => {
    it('should move last value of array to users stack', () => {
      stacks = {
        a: [4, 3, 2,],
        b: [1],
        c: []
      };
    });
  });

  //This test should test how towers works with all functions together
  describe('#towersOfHanoi()', () => {
    it('should checkforwin and islegal', () => {
      
      stacks = {
        a: [],
        b: [],
        c: [4, 3, 2, 1]
      };
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
