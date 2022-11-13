// WHILE LOOP

/*
var x = 0;
var y = 1;

while (x >= -10) {
  console.log(x)
  x = x - 2;
}

*/



// Loop around 1-20 and if divisible by # print TEXT if NOT then print #.
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `x` with a starting value of `1`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should use a conditional statement
 * - Your code should increment `x` by `1` each time the loop executes
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 

var x= 1;


while (x <= 20) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log('JuliaJames')
  } else if (x % 3 === 0) {
    console.log('Julia')
  } else if (x % 5 === 0) {
    console.log("James")
  } else (
    console.log(x) // Print the number if its not divisible by any other numbers.
  )
  x++;
  }







var x = 99;

while (x >= 1) {
  if (x===1) {
    console.log(x + " bottle of juice on the wall! " + x + ' bottle of juice! Take one down, pass it around... '+ (x-1) + ' bottles of juice on the wall!') // "bottles" if the number of bottles is pluaral
  } else if (x===2) {
    console.log(x + " bottle of juice on the wall! " + x + ' bottle of juice! Take one down, pass it around... '+ (x-1) + ' bottle of juice on the wall!')
  } else {
    console.log (x + " bottle of juice on the wall! " + x + ' bottle of juice! Take one down, pass it around... '+ (x-1) + ' bottles of juice on the wall!') // else run the normal TEXT
  }
  x--;
}



*/


/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 


 var x=60;

 while (x>=0) {
  if (x===50) {
    console.log('Orbiter transfers from ground to internal power')
  } else if (x===31) {
    console.log('Ground launch sequencer is go for auto sequence start')
  } else if (x===16) {
    console.log('Activate launch pad sound suppression system')
  } else if (x===10) {
    console.log('Activate main engine hydrogen burnoff system')
  } else if (x===6) {
    console.log('Main engine start')
  } else if (x===0) {
    console.log("Solid rocket booster ignition and liftoff!")
  } else {
    console.log('T-'+x+" seconds")
  }
  x--
 }

*/








// FOR LOOP

/*
 * QUIZ REQUIREMENTS
 * - Your code should use a `for` loop
 * - Your `for` loop should specify a starting condition `x` with the value of `9`
 * - Your `for` loop should have a stop condition for the value of `x`
 * - Your `for` loop should decrement `x` each time it executes
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 

var x = 9;

while (x>=1) {
  console.log('hello '+ x);
  x--;
}


for (var x=9; x>=1; x--) {
  console.log('hello '+ x)
}




// Write a for (note: not a function) loop that prints out the factorial of the number 12:


let solution = 1;

for (var x=1; x<= 12; x++) {
  solution *= x;
}

console.log(solution);




 Write a nested for loop to print out all of the different seat combinations in the theater.
* The first row-seat combination should be 0-0 
* The last row-seat combination will be 25-99
* 
* Things to note: 
*  - the row and seat numbers start at 0, not 1
*  - the highest seat number is 99, not 100


var row = 0;
var seats = 0;

for (var row=0; row<=25; row++) {
  for (var seats=0; seats<=99; seats++){
    console.log(row + '-' +seats)
  }
}

