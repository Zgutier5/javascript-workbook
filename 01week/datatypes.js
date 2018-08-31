'use strict';

//1. Write a JavaScript program to display the current day and time. I was playing around with code and thought this would be the best/shortest way of geting the date infor to print.

const day = (console.log(Date(Date)));



//2. Write a JavaScript program to convert a number to a string.
//Here I am trying to use the num.toString method or value.toString() method eventually i used string to change the number to a string
const makeString=(num1)=>{
  return String('number into a string')
};
console.log(makeString(87534));




//3. Write a JavaScript program to convert a string to the number.
//I am trying to figure this one out but can not seem to get it right. I am using string and parseInt method
//I just simplifed it by not makeing a return function

const makeNum= parseInt('10')
console.log(makeNum);


//4. Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String

// From what I can gather the method that should be used here sould be typeof:

console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof 42);
console.log(typeof NaN);
console.log(typeof 'zeke');


//5. Write a JavaScript program that adds 2 numbers together.
//I would use a function called the sumOfTwoNumbers to be able to add two numbers together:

const sumOfTwoNumbers=(num1, num2)=>{
  return num1+num2;
};
console.log (sumOfTwoNumbers(2,4));


//I am thinking that I would need to to run a condidtional top see if the funtion out come is true or false and the same conditions can be applied to the next questions #6 #7 and #8 by useing isNan on the same function used for question #5 which I added console.log(isNaN(num1), isNaN(num2)) to show if the arguments were true or false. a
//6. Write a JavaScript program that runs only when 2 things are true.
//7. Write a JavaScript program that runs when 1 of 2 things are true.
//8.Write a JavaScript program that runs when both things are not true.

const subtract=(n1, n2)=>{
  console.log(isNaN(n1), isNaN(n2))
  return n1-n2;
};
subtract(2,4);
subtract('ji','de');
subtract('me',5);
subtract(3,5);
