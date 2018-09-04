'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
  // Write code here
  //So I took some time and reviewed that project promt. I just couldnt seem to
  // undetstand why there was so many equations. So I thougt it would be easier to
  // just find the winning outcomes for hand2 all else would return Hand1 the winner.
  if (hand1 === hand2) {
    return "It's a tie!";
  } else if (hand1 === "rock" && hand2 === 'paper' || hand1 === 'scissors' && hand2 === "rock" || hand1 === 'paper' && hand2 === "scissors") {
    return "Hand Two Wins";
  }else if(hand1 === "paper" && hand2 === 'rock' || hand1 === 'rock' && hand2 === 'scissors' ||hand1 === 'scissors' && hand2 === 'paper'){
    return "Hand One Wins";
  //then I decided to add and invaild feature.
  }else {
    return "invalid answer"
  }

  console.log(hand1, hand2, 'in my function')
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {
// I basically want to simplify the code.  So I want to place all outcomes

describe('#rockPaperScissors()', () => {
  it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "Tie!");            
      assert.equal(rockPaperScissors('paper', 'paper'), "Tie!");            
      assert.equal(rockPaperScissors('scissors', 'scissors'), "Tie!");    });
  it('should detect which hand won', () => {
    assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
    assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
    assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
    assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
    assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
  });
  it('ensures all variations of the input work as expected', () => {
    assert.equal(rockPaperScissors('rocK', ' paper '), "Hand two wins!");
    assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
    assert.equal(rockPaperScissors('rock ', 'scissors'), "Hand one wins!");
  });
  it('should detect if the inputs are valid', () => {
      assert.equal(rockPaperScissors('7', 'HELLO'), "invaild");
      assert.equal(rockPaperScissors('dljfsdk', 'paper'), "invaild");
      assert.equal(rockPaperScissors('*', 8986), "invaild");
      assert.equal(rockPaperScissors([dklsjf], "Bonjour"), "invaild");
    });
});
} else {

  getPrompt();

}
