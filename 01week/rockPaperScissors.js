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

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
