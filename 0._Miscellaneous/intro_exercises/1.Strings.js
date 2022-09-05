// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

//by adding a "+" in front of the string i change the type to a number
const result1 = +numberOne + +numberTwo;

// --------------------------------------

console.log(result1);

// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";
const result2 = +anotherNumberOne + +anotherNumberTwo;

// by using the method toFixed i can control the number of decimals, the method returns the number as a String
console.log(result2.toFixed(2));

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

let sumOfNumbers = 0;
let averageNumber = 0;
let numbers = [one,two,three];
for(let i=0; i<numbers.length; i++){
    sumOfNumbers += numbers[i]
    averageNumber = sumOfNumbers / (i+1);
}

console.log(averageNumber);



// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

//Letters in a string can be accessed like an array.
// option 1 :
let letterC = "";

for(let j = 0;j < letters.length;j++){
    if(letters[j] === "c"){
        letterC = letters[j];
    }
}
console.log(letterC);

// option 2:

console.log(letters[2])


// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const uppercasedJ = fact.replace("javascript!","Javascript!")

console.log(uppercasedJ)
// --------------------------------------



