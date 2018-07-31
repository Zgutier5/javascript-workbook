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
// that make a tie in one line. Ill use the or symbol ||.
// And that is how I would rewrite that code.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock' ||'paper', 'paper' || 'scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper' || 'paper', 'scissors' || 'rock', 'scissors'), "Hand two wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper ' || 'Paper', 'SCISSORS' || 'rock ', 'sCiSsOrs'), "Hand two wins!");
    });
  });
} else {

  getPrompt();

}
