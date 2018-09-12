'use strict'

// create a function called printListOfOlympians
// the function should accept an array and use a forEach to console.log() every item in the array
// call the function with a test array of at least 5 names
// Commit at least 3 times
// Push to github, create a pull request
// the PR must be clean, the only file changed should be gitOlympics.js
// When everyone has an open pull request raise your hand for a check
// The first team with all pull requests merged/closed - wins



const olympians = ['Joe', 'sarah', 'chris', 'dave', 'juan'];

const printListOfOlympians = (Olympians)=>{
  olympians.forEach((item)=>{
    console.log(item);
  })
}
printListOfOlympians(olympians);
