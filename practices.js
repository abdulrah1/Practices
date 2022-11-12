// Celsius to Fahrenheit: F=C x 1.8 + 32
/*
let celsius = 30;
let fahrenheit = celsius * 1.8 + 32 

console.log(fahrenheit);





// Usings Quotations inside quoatations in JavaScript

var joke = "Why couldn't the shoes go out and play? \n They were all \"tied\" up!"

console.log(joke);

*/



/*
 * Programming Quiz: Out to Dinner (2-10)
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables - `bill`, `tip`, and `total`
 * 2. Your variables - `bill`, `tip`, and `total` should be declared using the `var` keyword
 * 3. Your variable `bill` should be a number, having a value equal to the result of `10.25 + 3.99 + 7.15`
 * 4. Your variable `tip` should be a number, having a value equal to 15% of the `bill`
 * 5. Your variabe `total` should be a number, having a value equal to the `bill` and `tip` added together
 * 6. Your code should print the total to the console
 */
 
// your code goes here
var bill= 10.25 + 3.99 + 7.15;
var tip = 0.15 * bill;
var total = bill + tip;


console.log('$'+ total.toFixed(2));

// toFixed(2) prints decimals to 2 digits. 


var firstName = 'Abdul Rahman';
var interest = 'coding';
var hobby = 'soccer';

var awesomeMessage = `Hi, my name is ${firstName}. I love ${interest}. In my spare time, I like to ${hobby}.`


console.log(awesomeMessage);