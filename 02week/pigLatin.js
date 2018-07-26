'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(str){
  // Write code here
  //first I need to make an array that defines vowels
  // also need to make a varible that splits the string
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const result = str.split('');
  // now I need to make a if statement that takes the vowel array
  // and inculdes a string to return 'way'
  if(vowels.includes(str.charAt[0])){
    return str += 'yay';
  } else {
    //now I need to create a loop that will take the conditions of the vowel
    //and will take the result and push the letters top the end
    //It should also return ay at the end as well
    for (var i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i])) {
        result.push(result.shift());
      } else {
        result.push('ay');
        return result.join('');
      }
    }
  }
}
// console.log(pigLatin('eight'))


function getPrompt() {
  rl.question('', (answer) => {
    console.log(pigLatin(answer) );
    getPrompt();
  });
};


// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
