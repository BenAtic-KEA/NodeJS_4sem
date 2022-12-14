// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const alienMessage = {
	message: "Hello, earthling! I bring peace."
};

// Log the message 
console.log(alienMessage.message)

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 
const person = {
	name: "Mark",
	age: 28
};

console.log("my name is:",person.name,"And my age is",person.age)

// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};

// make a rule called isAllowed and let the value be true

stackOverflow.isAllowed = true;

console.log("Added a new stackOverflow Property",stackOverflow.isAllowed)
// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {
	description: "The best song in the world."
}

// remove the property "description" and add a property called "about" that should say "Just a tribute." 
delete thisSong.description
thisSong.about = "Just a tribute."

console.log(thisSong)
// --------------------------------------


